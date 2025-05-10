import Image from 'next/image';
import { Container } from 'react-bootstrap';

export default function BannerDesktop() {
    return (
        <div style={{marginBottom: 50}}>
            <a href="https://lombablog.uny.ac.id" style={{ marginBottom: '70px' }}>
                <Container style={{ backgroundColor: '#dae1ff', width: '100%', height: 'auto', display: 'flex', flexDirection: 'row', gap: '2rem', paddingLeft: '2rem', paddingRight: '2rem', alignItems: 'center' }}>
                    <Image width={400} height={400} src='/banner.png' alt='Banner' style={{ objectFit: 'contain' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <p style={{ fontSize: '3rem', fontWeight: 'bold', color: 'black', textDecoration: "underline", textDecorationColor: "black" }}>MARI IKUTI LOMBA BLOG UNY 2025!</p>
                        <p style={{ color: 'blue' }}>KLIK UNTUK INFORMASI LEBIH LANJUT</p>
                    </div>
                </Container>
            </a>
        </div >
    );
}
