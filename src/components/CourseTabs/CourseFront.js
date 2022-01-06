import React from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: -1.5em;
    margin-right: 1.5em;
    width: 100%;
`;

const CourseContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: justify;
    p{
        font-size: 0.875em;
    }
    h1{
        font-size: 1.75em;
    }
    h2{
        font-size: 1.375em;
    }
`;
const Category = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: justify;
    background-color: #ccc;
    padding: 0.2em 0.75em;
    border-radius: 2em;
    
`;

const CategoryList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
`;


const CategoryCards = () => {
    
  return (
    <Wrapper>
        <img src='image/video-example.svg' alt='video' width='105%'/>
        <CourseContents>
            <h1>Cara Alami Menguasai Bahasa Inggris Semudah Bahasa Indonesia</h1>
            <p>
                Jika Anda bisa bahasa Indonesia seharusnya Anda juga bisa bahasa Inggris. 
                Tanpa sadar Anda sudah menjalani proses alami belajar bahasa. Ternyata Tuhan sudah 
                menurunkan metode bagaimana menguasai suatu bahasa, itulah cara alami. Suatu cara yang 
                sudah anda lakukan, namun Anda tidak menyadari. Apakah anda bisa bahasa Indonesia? Apakah anda 
                kursus bahasa Indonesia? Bagaimana cara anda belajar bahasa Indonesia?
            </p>
            <p>
                Memperkenalkan “Cara Alami Menguasai Bahasa Inggris Semudah Bahasa Indonesia”.
                Metode ini menuntun Anda langkah demi langkah bagaimana menguasai bahasa Inggris dengan 
                cara alami seperti orang Indonesia menguasai bahasa Indonesia, termasuk penyiapan perangkat dan 
            </p>
        </CourseContents>
        <CourseContents>
            <h2>Tujuan Pembelajaran</h2>
            <p>
                Belajar bahasa Inggris di kelas ini membuat anda menyadari kesalahan umum yang menyebabkan:
                Belajar bahasa Inggris terasa sangat sulit
                Setelah kursus kemampuan anda berangsur-angsur menurun
                Masih sulit memahami novel, komik dan film, biarpun sudah kursus
                Ketika bicara bahasa Inggris takut salah sehingga muncul rasa tidak percaya diri.
            </p>
        </CourseContents>
        <CourseContents>
            <h2>Yang Akan Siswa Pelajari</h2>
            <p>
                Metode alami yang dapat meningkatkan kemampuan semua aspek bahasa secara bersamaan meliputi kosa kata, 
                kemampuan bicara, mendengar, membaca, menulis, tata bahasa dan pelafalan sehingga menguasai bahasa Inggris menjadi sangat mudah.
                Menghindari munculnya rasa tidak percaya diri ketika bicara bahasa Inggris.
                Memanfaatkan materi, perangkat dan teknologi yang sudah anda miliki namun belum menyadari
                Teknik jitu bicara dengan English native speaker
                Teknik jitu bicara di depan umum, bagaimana mengatasi grogi hanya dalam satu menit.
            </p>
        </CourseContents>
        <CourseContents>
            <h2>Sertifikat</h2>
            <img src='image/certificate-example.svg' alt='video' width='100%'/>
        </CourseContents>
        <CourseContents>
            <h2>Untuk Siapa Kelas Ini?</h2>
            <CategoryList>
                <Category>Mahasiswa</Category>
                <Category>Umum</Category>
                <Category>Karyawan</Category> 
                <Category>Profesional</Category>
            </CategoryList>
            
        </CourseContents>
        <CourseContents>
            <h2>Cara Belajar</h2>
            <p>
                14 video ajar yang bisa anda saksikan kapan saja dan dimana saja.
                E-book Kuis Online session pembahasan dan tanya-jawab
            </p>
        </CourseContents>
        <CourseContents>
            <h2>Tentang Pengajar</h2>
            <p>
                Kelas ini dibawakan oleh Bapak Anang Sam dari English Technology, sebuah institusi kursus 
                Bahasa Inggris di Jakarta yang berpengalaman belasan tahun dalam mengajar Bahasa Inggris. Dari pengalaman panjang tersebut English 
                Technology berhasil mengembangkan metode pengajaran dan belajar Bahasa Inggris secara 
                alami dan mudah yang tidak anda dapatkan di tempat lain.
            </p>
        </CourseContents>
        <CourseContents>
            <h2>Kurikulum Kelas</h2>
            <Accordion/>
        </CourseContents>
    </Wrapper>
  );
};
  
export default CategoryCards;