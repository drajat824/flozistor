import Image from 'next/image';

export default function BackgroundImage({ src, title, subtitle }) {
    return (
        <div>
            {/* Desktop */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'center' }} className="d-none d-lg-flex">
                <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                    <Image
                        src={src}
                        width={1920}
                        height={1080}
                        style={{ width: '100%', height: '500px', objectFit: 'cover', filter: 'brightness(50%)' }}
                        alt='Background Image'
                        priority
                        unoptimized
                    />

                    {/* Overlay (untuk lebih fleksibel) */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.4)'  // 0.4 untuk sedikit redup, ubah sesuai kebutuhan
                        }}
                    />
                </div>
                <h1 style={{ color: 'white', position: 'absolute', top: '40%', fontSize: '4rem', fontWeight: 'bold', whiteSpace: 'pre-wrap', textAlign: 'center' }}>{title}</h1>
            </div>
            {/* Mobile */}
            <div style={{ position: 'absolute', top: 80, left: 0, width: '100%', display: 'flex', justifyContent: 'center' }} className="d-flex d-lg-none">
                <div>
                    <h1 style={{ color: 'black', fontSize: '2rem', fontWeight: 'bold', whiteSpace: 'pre-wrap', textAlign: 'center' }}>{title}</h1>
                    <div style={{ position: 'relative', width: '90vw', height: 'auto' }}>
                        <Image
                            src={src}
                            width={1920}
                            height={1080}
                            style={{ width: '90vw', height: 'auto', filter: 'brightness(80%)' }}
                            alt='Background Image'
                            priority
                            unoptimized
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
