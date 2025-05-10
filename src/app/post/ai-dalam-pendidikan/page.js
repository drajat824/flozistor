'use client';

import Link from "next/link";
import { Container, Button } from 'react-bootstrap';
import MyNavbar from "../../components/MyNavbar";
import TitlePost from "../../components/TitlePost";
import Game from "../../components/Game";


export default function PostPage() {
    return (
        <div>

            {/* Navbar */}
            <MyNavbar />

            {/* Background Image */}
            <TitlePost src="/post/robot.jpg" title={`AI dalam Pendidikan,\nAncaman atau Kawan?`} subtitle="" />

            {/* Konten Desktop */}
            <div className='d-none d-lg-flex' style={{ marginTop: '450px' }}>
                <Container style={{ paddingBottom: '30px', paddingLeft: '100px', paddingRight: '100px' }}>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Sebelum memulai pembahasan, mari kita bermain permainan sederhana berikut ini.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 40 }}>
                        <Game />
                    </div>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Walaupun sederhana, cukup menghibur bukan?
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Permainan tersebut dibuat menggunakan ChatGPT, sebuah Artificial Intelligence (AI) yang dikembangkan oleh OpenAI dan dirancang untuk memahami dan menghasilkan teks dalam berbagai konteks bahkan hingga menyelesaikan tugas seperti pemrograman.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Meskipun permainan diatas terlihat sangat sederhana dan remeh. Namun dewasa ini, perkembangan Artificial Intelligence (AI) tidak sesederhana dan sebatas itu. AI telah merambah ke berbagai bidang seperti kesehatan, militer bahkan pendidikan. Perkembangan AI sendiri sebenarnya sudah dimulai cukup lama, dimulai sejak tahun 1950-an saat seorang ilmuwan dari Massachusetts Institute of Technology (MIT) bernama John McCarthy menggagas sebuah konferensi di Dartmouth College di Hanover, Amerika Serikat. 
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                       Mari kita loncat ke tahun 1997, di mana pada tahun tersebut seorang Garry Kasparov yang merupakan juara catur dunia, dikalahkan oleh sebuah super komputer milik IBM bernama Deep Blue dalam sebuah pertandingan. Ini merupakan salah satu tonggak penting dalam perkembangan kecerdasan buatan/Artificial Intelligence (AI). <a href="https://www.merdeka.com/sumut/peristiwa-11-mei-komputer-milik-ibm-bernama-deep-blue-mengalahkan-pecatur-ulung-garry-kasparov-128206-mvk.html">(Sumber: Merdeka)</a>
                    </p>
                    

                </Container>
            </div>

            {/* Konten Mobile */}
            <div className="d-flex d-lg-none" style={{ marginTop: '350px' }}>
                <Container style={{ paddingBottom: '40px' }}>

                    {/* Postingan */}
                    <blockquote style={{
                        fontSize: '1.3rem',
                        fontStyle: 'italic',
                        color: '#333',
                        margin: '20px auto',
                        padding: '10px',
                        paddingLeft: '20px',
                        marginBottom: '30px',
                        borderLeft: '5px solid #ccc',
                    }}>
                        Jadikan Setiap Tempat Sebagai Sekolah, Jadikan Setiap Orang Sebagai Guru
                    </blockquote>


                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Sebuah kutipan dari Ki Hadjar Dewantara ini membuka tulisan saya kali ini. Saya sengaja memilih kutipan tersebut karena saya berkeyakinan bahwa pendidikan tidak selalu harus terperangkap pada hal-hal formal saja. Pendidikan bisa diperoleh dari merenungkan kisah hidup seorang revolusioner besar seperti Tan Malaka, bersandar di bawah pohon apel sembari mempertanyakan eksistensi gravitasi, menghabiskan waktu seharian penuh di dalam perpustakaan dan terhanyut dalam sajak-sajak oriental Khalil Gibran, atau menceritakan tentang sosok anak muda penuh tawa bernama Lupus.
                    </p>
                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Pendidikan seharusnya adalah sebuah proses yang menggembirakan, ia tercipta dari kata yang cukup mistis, ‘Curiosity’. Sebuah kata sederhana yang kelak menjadi sebab terciptanya peradaban. Sebuah kata yang kelak menjadi alasan umat manusia menginjakkan kakinya pertama kali di bulan. Sebuah kata yang menggerakkan Ibrahim dalam pencariannya terhadap Tuhan yang esa.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Namun dewasa ini, melihat dari lingkungan sekitar, pendidikan umumnya hanya dimaknai sebagai proses rutin sebelum mencapai usia dewasa dan berkeluarga. Lebih parahnya, pendidikan hanya dipandang sebagai proses industrialisasi. Tak munafik memang, sampai beberapa bulan. Ah tidak, mungkin sampai beberapa hari lalu saya juga masih terjebak dengan pemikiran ini. Sebenarnya tidak ada yang salah, karena industri juga memiliki standar yang telah ditetapkan untuk mendukung proses produksi. Hanya saja ketika saya merenung lebih dalam, saya seakan-akan mempertanyakan ulang tujuan dari semua ini. Manusia seolah-olah dilahirkan hanya untuk bekerja, tidak lebih. Dan pendidikan diberikan hanya untuk memenuhi kepuasan ego terhadap materi.
                    </p>

                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', paddingBottom: 20 }} >
                        Pythagoras: Mistisme Matematika
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Pythagoras, seorang filsuf yang hidup pada masa Yunani Kuno. Seorang pemikir yang pemikirannya juga turut mempengaruhi pemikiran Plato dan Aristoteles. Seorang yang dewasa ini, namanya diabadikan dalam sebuah rumus matematis dengan nama ‘Teorema Pythagoras’. Dibalik sosoknya yang dikenal sebagai seorang matematikawan, Pythagoras juga dikenal sebagai sosok yang dekat dengan mistisme dan aliran Metempsikosis, yaitu sebuah konsep dalam filsafat Yunani yang berkaitan dengan reinkarnasi. Tidak sampai di situ, kedekatan sosok Pythagoras dan mistisme menjadikan pemikirannya diikuti oleh orang-orang yang kelak disebut sebagai Pythagoreanisme. Menurut Aristoteles, kaum Pythagoreanis menggunakan matematika untuk tujuan mistis dan bukan untuk keperluan sehari-hari.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Terlepas dari kehidupannya yang penuh kontroversi, Pythagoras dan pengikutnya menjadikan matematika sebagai objek mistis yang erat dengan jiwa. Layaknya seorang seniman yang begitu erat dengan karya seninya, Pythagoras menikmati matematika sebagai hal yang menggembirakan dan mungkin sampai pada tingkat sakral. Matematika, sebuah bidang ilmu yang dewasa ini banyak dibenci oleh para peserta didik, sebuah bidang ilmu yang dianggap menakutkan karena berhubungan dengan logika dan angka. Sebuah bidang ilmu, yang bagi sebagian siswa sudah kehilangan mantra ‘Curiosity’-nya.
                    </p>

                    <p style={{ fontSize: '1.3rem', fontWeight: 'bold', paddingBottom: 20 }} >
                        Refleksi Pendidikan Masa Kini
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Sejatinya, pendidikan ada untuk dinikmati bagai sepotong kue. Sedikit demi sedikit, sepotong demi sepotong. Potongan pertama, adalah sebuah potongan dengan rasa ingin tahu. Rasa yang menjadi dasar bagi rasa-rasa lain setelahnya. Rasa yang kemudian tumbuh menjadi akar dan tertancap untuk tegaknya proses pembelajaran kedepannya.
                    </p>

                    <p style={{ fontSize: '1.3rem', paddingBottom: 20 }} >
                        Potongan kedua, adalah potongan yang paling besar dari semua potongan lain. Potongan yang mungkin tak akan habis dimakan hingga potongan terakhir, potongan yang akan selalu tersedia dan dapat dinikmati dimana saja ketika lapar. Sebuah potongan kue yang mungkin semua orang memilikinya dan dapat diminta. Potongan kedua, adalah potongan dengan rasa fleksibilitas. Sebuah rasa yang menekankan bahwa pendidikan hadir di mana saja, dari mana saja, kapan saja, dan oleh siapa saja. Tidak terbatas ruang maupun waktu.
                    </p>

                </Container>
            </div>

        </div>
    );
}