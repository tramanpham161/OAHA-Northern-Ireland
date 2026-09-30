import { Request, Response } from 'express';
import { InquiryPayload } from '../src/types';

// In-memory store for inquiries submitted through the microsite
const inquiriesStore: InquiryPayload[] = [
  {
    name: 'Dr. Sarah Jenkins',
    email: 's.jenkins@leeds.ac.uk',
    organization: 'University of Leeds / School of Medicine',
    role: 'Principal Clinical Investigator',
    sector: 'Academic & Research',
    interestArea: 'Clinical Trials & Translation',
    message: 'We are seeking collaboration on real-world evidence trials for our early-stage point-of-care cardiovascular screening sensor within Leeds Teaching Hospitals.',
    consent: true,
    receivedAt: '2026-09-20T10:14:00Z',
    referenceId: 'OAHA-LDS-1001'
  },
  {
    name: 'Marcus Thorne',
    email: 'mthorne@healthinnovations-yorkshire.org',
    organization: 'Yorkshire Health Innovation Network',
    role: 'Head of Regional Adoption',
    sector: 'Industry & HealthTech',
    interestArea: 'Digital Health & AI',
    message: 'Interested in linking with OAHA Leeds on our AI respiratory pathway pilot across Bradford and Leeds GP practices.',
    consent: true,
    receivedAt: '2026-09-24T14:30:00Z',
    referenceId: 'OAHA-LDS-1002'
  }
];

export function handleGetInquiries(_req: Request, res: Response) {
  res.json({
    success: true,
    count: inquiriesStore.length,
    inquiries: inquiriesStore
  });
}

export function handlePostInquiry(req: Request, res: Response) {
  try {
    const {
      name,
      email,
      formType = 'contact',
      organization,
      org,
      role,
      sector,
      interestArea,
      message,
      initiativeName,
      targetGroup,
      website,
      location,
      subject,
      consent
    } = req.body;

    if (!name || !String(name).trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your name.'
      });
    }

    if (!email || !String(email).includes('@')) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    const orgName = organization || org || (initiativeName ? `Initiative: ${initiativeName}` : 'Individual');
    const combinedMessage = message || (
      formType === 'share_initiative'
        ? `[Shared Initiative: ${initiativeName || 'Unnamed'}] Target Group: ${targetGroup || 'N/A'}. Web: ${website || 'N/A'}`
        : formType === 'register'
        ? `[Registration of Interest] Role: ${role || 'N/A'}. Location: ${location || 'N/A'}. Interest: ${interestArea || 'General'}`
        : 'Project inquiry'
    );

    const referenceId = `OAHA-NI-${Math.floor(1000 + Math.random() * 9000)}`;
    const newInquiry: InquiryPayload = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      organization: String(orgName).trim(),
      role: role ? String(role).trim() : 'Collaborator',
      sector: sector || formType,
      interestArea: interestArea || subject || 'Northern Ireland Social Mobility Initiative',
      message: String(combinedMessage).trim(),
      consent: consent !== undefined ? Boolean(consent) : true,
      receivedAt: new Date().toISOString(),
      referenceId
    };

    inquiriesStore.unshift(newInquiry);

    if (inquiriesStore.length > 100) {
      inquiriesStore.pop();
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for your submission. Your details have been received by the OAHA team.',
      referenceId,
      inquiry: newInquiry
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: 'Internal server error while recording submission. Please contact info.oaha.uk@gmail.com directly.'
    });
  }
}
