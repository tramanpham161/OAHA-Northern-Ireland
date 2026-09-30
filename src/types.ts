export interface InquiryPayload {
  name: string;
  email: string;
  org?: string;
  organization?: string;
  role: 'employer' | 'education' | 'charity' | 'youth' | string;
  sector?: string;
  interestArea?: string;
  message: string;
  consent?: boolean;
  receivedAt?: string;
  referenceId?: string;
}

export interface InquiryNode {
  title: string;
  description: string;
  color: 'forest' | 'cyan' | 'orange' | 'navy' | 'brown' | 'gray';
  iconName: string;
}

export interface CollaboratorCard {
  title: string;
  description: string;
  color: 'navy' | 'cyan' | 'forest' | 'orange' | 'brown' | 'gray';
  iconName: string;
}
