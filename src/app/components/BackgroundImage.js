import Image from 'next/image';

export default function BackgroundImage({ src, title, subtitle }) {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'center' }} className="d-none d-lg-flex">
            <Image
                src={src}  // Pastikan path ini sesuai
                width={1920}  // Sesuaikan ukuran yang diinginkan
                height={1080}
                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                alt='Background Image'  // Deskripsi gambar
                priority  // Memuat gambar lebih cepat
                unoptimized  
            />
            <h1 style={{ color: 'white', position: 'absolute', top: '40%', fontSize: '6rem', fontWeight: 'bold', whiteSpace: 'pre-wrap', textAlign: 'center' }}>{title}</h1>
            <h2 style={{ color: 'white', position: 'absolute', top: '65%', fontSize: '1.3rem', fontWeight: 'bold', whiteSpace: 'pre-wrap', textAlign: 'center', width: '80%' }}>
                {subtitle}
            </h2>
        </div>
    );
}
