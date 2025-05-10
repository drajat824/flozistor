import Image from 'next/image';
import { Container } from 'react-bootstrap';

export default function BannerMobile() {
    return (
        <div style={{marginBottom: 30}} >
            <a href="https://lombablog.uny.ac.id">
                <Container style={{ backgroundColor: '#dae1ff', width: '100%', height: '100%', paddingLeft: '1.3rem', paddingRight: '1.3rem', paddingBottom: '0rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Image width={300} height={300} src='/banner.png' alt='Banner' style={{ objectFit: 'contain' }} />
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', textDecoration: "underline", textDecorationColor: "black", marginTop: -20 }}>MARI IKUTI LOMBA BLOG UNY 2025!</p>
                </Container>
            </a>
        </div>
    );
}
