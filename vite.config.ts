import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function apiDevPlugin(): Plugin {
  const inquiries: any[] = [
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
    }
  ];

  return {
    name: 'api-dev-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/health' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ status: 'healthy', initiative: 'OAHA Leeds Microsite' }));
          return;
        }

        if (req.url === '/api/inquiry') {
          if (req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, count: inquiries.length, inquiries }));
            return;
          }

          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const parsed = JSON.parse(body || '{}');
                const referenceId = `OAHA-LDS-${Math.floor(1000 + Math.random() * 9000)}`;
                const newEntry = {
                  ...parsed,
                  receivedAt: new Date().toISOString(),
                  referenceId
                };
                inquiries.unshift(newEntry);
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: true,
                  message: 'Thank you for contacting OAHA Leeds. Your inquiry has been registered with the regional team.',
                  referenceId,
                  inquiry: newEntry
                }));
              } catch (e) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload' }));
              }
            });
            return;
          }
        }
        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiDevPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      allowedHosts: true as const,
      cors: true,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
