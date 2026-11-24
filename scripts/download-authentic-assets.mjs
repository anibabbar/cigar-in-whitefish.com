import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const uploadsDir = path.resolve('public/images/uploads');
const brandsDir = path.resolve('public/images/brands');
fs.mkdirSync(uploadsDir, { recursive: true });
fs.mkdirSync(brandsDir, { recursive: true });

const downloads = [
  {
    url: 'https://cdn.prod.website-files.com/6435945aa2ffce0829a2b222/6446eeba3428566956c50dd9_LeafCloudEdits%20compressed-08151-p-1600.jpg',
    dest: path.join(uploadsDir, 'hero-humidor.jpg'),
  },
  {
    url: 'https://cdn.prod.website-files.com/6435945aa2ffce0829a2b222/670760dd723ab354cdc9e791_LeafCloud-08691-Enhanced-NR-p-1080.jpg',
    dest: path.join(uploadsDir, 'padron-showcase.jpg'),
  },
  {
    url: 'https://cdn.prod.website-files.com/6435945aa2ffce0829a2b222/67c754222ee2f23dfd3d029b_untitled-08982-p-1080.jpg',
    dest: path.join(uploadsDir, 'opusx-showcase.jpg'),
  },
  {
    url: 'https://cdn.prod.website-files.com/6435945aa2ffce0829a2b222/670760debdf72dfd3d0f2d1b_LeafCloud-08801-p-1080.jpg',
    dest: path.join(uploadsDir, 'shop-interior.jpg'),
  },
  {
    url: 'https://cdn.prod.website-files.com/6435945aa2ffce0829a2b222/670760dc7e1bbf98b910af98_LeafCloud-08869-p-1080.jpg',
    dest: path.join(uploadsDir, 'walkin-humidor.jpg'),
  },
  {
    url: 'https://cdn.prod.website-files.com/6435945aa2ffce0829a2b222/670760d9723ab354cdc9e3c5_LeafCloud-08821-p-1080.jpg',
    dest: path.join(uploadsDir, 'tobacco-leaf.jpg'),
  },
  {
    url: 'https://cdn.prod.website-files.com/6435945aa2ffce0829a2b222/67076727e02e991a83621bbc_logo-arturofuente-drk.png',
    dest: path.join(brandsDir, 'arturo-fuente.png'),
  },
  {
    url: 'https://cdn.prod.website-files.com/6435945aa2ffce0829a2b222/6707696b2aeefc910a017bf1_plasencia.png',
    dest: path.join(brandsDir, 'plasencia.png'),
  },
  {
    url: 'https://cdn.prod.website-files.com/6435945aa2ffce0829a2b222/67076b83d09c5b388b77657c_RP.png',
    dest: path.join(brandsDir, 'rocky-patel.png'),
  },
  {
    url: 'https://cdn.prod.website-files.com/6435945aa2ffce0829a2b222/67076d3724f31e9db0e7c7ba_EPCarillo.png',
    dest: path.join(brandsDir, 'ep-carrillo.png'),
  },
  {
    url: 'https://cdn.prod.website-files.com/6435945aa2ffce0829a2b222/67076ea91d4b5f9eab970b7d_oliva.png',
    dest: path.join(brandsDir, 'oliva.png'),
  },
  {
    url: 'https://cdn.prod.website-files.com/6435945aa2ffce0829a2b222/67076f84e02e991a8369334c_hupman.png',
    dest: path.join(brandsDir, 'h-upmann.png'),
  },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close(resolve);
        });
      } else {
        reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

for (const item of downloads) {
  try {
    await downloadFile(item.url, item.dest);
    console.log(`Saved ${path.basename(item.dest)}`);
  } catch (err) {
    console.error(err.message);
  }
}
