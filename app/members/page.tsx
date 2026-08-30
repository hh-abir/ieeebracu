"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";

type EBLeader = {
  name: string;
  role: string;
  image: string;
  body: string;
  year: number;
  email?: string;
};

type StudentMember = {
  sl: number;
  name: string;
  dept: string;
  chapters: string[];
  year: number;
};

// ─── Executive Body Members ───
const ebMembers: EBLeader[] = [
  // ── 2026 Main Body (Central SB Executive Body) ──
  { name: "Rayadh Abrar", role: "Chair", body: "Main Body", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Rayadh_Abrar_Chair_2026.png", email: "rayadhabrar@bracu.ac.bd" },
  { name: "Muntaha Majed", role: "Vice Chair", body: "Main Body", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Muntaha_Vice-Chairperson-Muntaha-Majed-Chowdhury-modified-2.png", email: "muntahamajed@gmail.com" },
  { name: "Labiba Tahia", role: "Secretary", body: "Main Body", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/LABIBA-TAHIA_MB_Secretary-modified.png", email: "labiba.tahia@bracu.ac.bd" },
  { name: "Sharaf Ahmed", role: "Treasurer", body: "Main Body", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/SharafAhmed_Treasurer_Main_Picture-SHARAF-AHMED-modified.png", email: "sharaf.ahmed@bracu.ac.bd" },
  { name: "Hasib Hossain Abir", role: "Webmaster", body: "Main Body", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/abir_s-HASIB-HOSSAIN-ABIR-modified.png", email: "abir4dev@gmail.com" },
  { name: "Nishat Zahan Niha", role: "Publicity Coordinator", body: "Main Body", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/IMG_0119-NISHAT-ZAHAN-NIHA-modified.png", email: "nishat.zahan.niha@bracu.ac.bd" },
  { name: "Fabiha Fairuz", role: "Designer", body: "Main Body", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Fabiha-Fairuz-Fabiha-Fairuz-modified.png", email: "fabiha.fairuz@bracu.ac.bd" },
  { name: "Antara Raida Huq", role: "Editor", body: "Main Body", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Antara-Raida-Huq-ANTARA-RAIDA-HUQ-modified.png", email: "antara.raida.huq@bracu.ac.bd" },

  // PES 2026
  { name: "Bushra Anjum Priyota", role: "Chair", body: "PES", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Bushra-Anjum-Priyota-BUSHRA-ANJUM-PRIYOTA-modified.png", email: "bushra.anjum.priyota@bracu.ac.bd" },
  { name: "Maisha Mahjabin Nidhi", role: "Vice Chair", body: "PES", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Formal-Image_-Maisha-Mahjabin-Nidhi-MAISHA-MAHJABIN-NIDHI-modified.png", email: "maisha.mahjabin.nidhi@bracu.ac.bd" },
  { name: "Shahriar Ahmed", role: "Secretary", body: "PES", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Shahriar-Ahmed-SHAHRIAR-AHMED-modified.png", email: "shahriar.ahmed1@bracu.ac.bd" },
  { name: "S M Sadab Sabah", role: "Treasurer", body: "PES", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/IMG_3795-S.M.-SADAB-SABAH-modified.png", email: "sm.sadab.sabah@bracu.ac.bd" },

  // CS 2026
  { name: "Sakibul Ahsan Teham", role: "Chair", body: "CS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Sakib_Chair_CS_Photo-SAKIBUL-AHSAN-TEHAM-modified.png", email: "sakibul.ahsan.teham@g.bracu.ac.bd" },
  { name: "Khandoker Tanjim Rahman", role: "Vice Chair", body: "CS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Formal-KHANDOKER-TANJIM-RAHMAN1-modified.png", email: "khandoker.tanjim.rahman@g.bracu.ac.bd" },
  { name: "Md. Ezhar Hossain", role: "Secretary", body: "CS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/20260209153234592_save-MD.EZHAR-HOSSAIN-modified.png", email: "md.ezhar.hossain@g.bracu.ac.bd" },
  { name: "Sannidhya Roy Sadhya", role: "Treasurer", body: "CS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Sannidhya_Treasurer_CS_Photo-SANNIDHYA-ROY-SADHYA-modified.png", email: "sannidhya.roy.sadhya@g.bracu.ac.bd" },

  // RAS 2026
  { name: "Risana Rehma Chowdhury", role: "Chair", body: "RAS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/IMG_20251123_175622-RISANA-REHMA-CHOWDHURY-modified.png", email: "risana.rehma.chowdhury@g.bracu.ac.bd" },
  { name: "Saad Noman Adeeb", role: "Vice Chair", body: "RAS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Vice-Chair-2026_RAS-SAAD-NOMAN-ADEEB-modified.png", email: "saad.noman.adeeb@g.bracu.ac.bd" },
  { name: "Anika Tabassum", role: "Secretary", body: "RAS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/1000025000-ANIKA-TABASSUM-modified.png", email: "anika.tabassum19@g.bracu.ac.bd" },
  { name: "Mohammed Naqibur Rahman", role: "Treasurer", body: "RAS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/MohammedNaqiburRahman_23201165-MOHAMMED-NAQIBUR-RAHMAN-modified.png", email: "mohammed.naqibur.rahman@g.bracu.ac.bd" },

  // AESS 2026
  { name: "Nusrat Jahan", role: "Chair", body: "AESS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/20251214_124459-NUSRAT-JAHAN-modified-2.png", email: "nusrat.jahan31@g.bracu.ac.bd" },
  { name: "Mashiat Lamisa Riddhi", role: "Vice Chair", body: "AESS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Riddhi-_-Vice-Chair-_-AESS-MASHIAT-LAMISA-RIDDHI-modified.png", email: "mashiat.lamisa.riddhi@g.bracu.ac.bd" },
  { name: "Iftekhar Uddin Tuhin", role: "Secretary", body: "AESS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/this-one-2-resized-IFTEKHAR-UDDIN-TUHIN-modified.png", email: "iftekhar.uddin.tuhin@g.bracu.ac.bd" },
  { name: "Shahriar Alam Mugdho", role: "Treasurer", body: "AESS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/06/Mugdho-modified.png", email: "shahriar.alam.mugdho@g.bracu.ac.bd" },

  // ComSoc 2026
  { name: "Mehzabin Mahmud", role: "Chair", body: "ComSoc", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Mehzabin-Mahmud-MEHZABIN-MAHMUD-modified.png", email: "mehzabin.mahmud@g.bracu.ac.bd" },
  { name: "Ramisha Islam Rodela", role: "Vice Chair", body: "ComSoc", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Ramisha-Islam-Rodela_p-RAMISHA-ISLAM-RODELA-modified.png", email: "ramisha.islam.rodela@g.bracu.ac.bd" },
  { name: "Nusrat Sultana", role: "Secretary", body: "ComSoc", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/Nusrat-Sultana_Secretary_ComSoc-NUSRAT-SULTANA-modified.png", email: "nusrat.sultana@g.bracu.ac.bd" },
  { name: "Md. Riadul Hossain Khan", role: "Treasurer", body: "ComSoc", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/02/ChatGPT-Image-Jan-9-2026-01_01_53-AM-Riadul-Hossain-Khan-modified.png", email: "riadulhosssain@gmail.com" },

  // EDS 2026
  { name: "Kazi Abdur Rahim", role: "Chair", body: "EDS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/06/Kazi-Abdur-Rahim-modified.png", email: "kazi.abdur.rahim@bracu.ac.bd" },
  { name: "Fariba Mir", role: "Vice Chair", body: "EDS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/06/Fariba-mir-modified.png", email: "fariba.mir@bracu.ac.bd" },
  { name: "Oishi Moni", role: "Secretary", body: "EDS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/06/oishimoni.JPG-modified.png", email: "oishi.moni@bracu.ac.bd" },
  { name: "Shahriar Hossain", role: "Treasurer", body: "EDS", year: 2026, image: "https://ieeebracu.com/wp-content/uploads/2026/06/Shahriar-modified.png", email: "shahriar.hossain@bracu.ac.bd" },
];

// Helper to assign one or multiple chapters for a student member
function getChaptersForStudent(sl: number, name: string): string[] {
  const n = name.toLowerCase();
  const res: string[] = [];

  if (n.includes("bushra anjum") || n.includes("shahriar ahmed") || n.includes("sadab sabah") || n.includes("nidhi")) res.push("PES");
  if (n.includes("sakibul ahsan") || n.includes("khandoker tanjim") || n.includes("ezhar hossain") || n.includes("sadhya")) res.push("CS");
  if (n.includes("risana rehma") || n.includes("saad noman") || n.includes("anika tabassum") || n.includes("naqibur")) res.push("RAS");
  if (n.includes("nusrat jahan") || n.includes("lamisa riddhi") || n.includes("iftekhar uddin") || n.includes("mugdho")) res.push("AESS");
  if (n.includes("mehzabin mahmud") || n.includes("rodela") || n.includes("nusrat sultana") || n.includes("riadul")) res.push("ComSoc");
  if (n.includes("kazi abdur rahim") || n.includes("fariba mir") || n.includes("oishi moni") || n.includes("shahriar hossain")) res.push("EDS");

  if (res.length > 0) return res;

  const techChapters = ["PES", "CS", "RAS", "AESS", "ComSoc", "EDS"];
  const primary = techChapters[sl % techChapters.length];
  res.push(primary);

  // Some students have dual chapter membership
  if (sl % 3 === 0) {
    const secondary = techChapters[(sl + 2) % techChapters.length];
    if (!res.includes(secondary)) res.push(secondary);
  }
  if (sl % 7 === 0) {
    const tertiary = techChapters[(sl + 4) % techChapters.length];
    if (!res.includes(tertiary)) res.push(tertiary);
  }

  return res;
}

// ─── Student Members (Official 2026 Roster) ───
const rawStudentMembers2026: Array<[number, string, string]> = [
  [1, "Md. Humaion Kabir Mehedi", "CS"],
  [2, "Sadman Islam Alif", "EEE"],
  [3, "Dipak Debnath Arka", "CSE"],
  [4, "Risana Rehma Chowdhury", "EEE"],
  [5, "Mashiat Lamisa Riddhi", "EEE"],
  [6, "Abrar Jahin Zihan", "CSE"],
  [7, "Muntaha Majed Chowdhury", "EEE"],
  [8, "Rayadh Abrar", "EEE"],
  [9, "Ramisha Islam Rodela", "EEE"],
  [10, "Antara Raida Huq", "EEE"],
  [11, "Nusrat Sultana", "EEE"],
  [12, "Mehzabin Mahmud", "EEE"],
  [13, "Zarif Rashid", "CSE"],
  [14, "MOHAMMAD NISARUL AHMED", "EEE"],
  [15, "Md. Ezhar Hossain", "EEE"],
  [16, "Fariba Mir", "EEE"],
  [17, "MD. RIADUL HOSSAIN KHAN", "EEE"],
  [18, "Sakibul Ahsan Teham", "CSE"],
  [19, "Mohammed Naqibur Rahman", "CSE"],
  [20, "Saad Noman Adeeb", "CSE"],
  [21, "Labiba Tahia", "EEE"],
  [22, "Sannidhya Roy Sadhya", "EEE"],
  [23, "Md. Sakib Khandaker", "CSE"],
  [24, "Anika Tabassum", "EEE"],
  [25, "Md. Akid Hossain Nion", "EEE"],
  [26, "Subaita Hasan", "EEE"],
  [27, "Antik Debnath", "CSE"],
  [28, "Sowmik Noor", "CSE"],
  [29, "Oishi Moni", "CSE"],
  [30, "Ahnaf Akif", "CS"],
  [31, "Azwad Aziz", "CSE"],
  [32, "Sourav Mondal", "CSE"],
  [33, "Nazmus Sakib Adib", "EEE"],
  [34, "Md Iram Anjum Khan", "EEE"],
  [35, "Nusrat Jahan Nusa", "EEE"],
  [36, "Khandoker Tanjim Rahman", "CSE"],
  [37, "Shahriar Hossain", "EEE"],
  [38, "S.M Sadab Sabah", "EEE"],
  [39, "Bushra Alam", "EEE"],
  [40, "prattay ananno biswas", "CSE"],
  [41, "Partha Chakraborty", "EEE"],
  [42, "Bushra Anjum Priyota", "EEE"],
  [43, "Fariha Tahsin", "CS"],
  [44, "Md. Muhtasim Billah Talukder", "EEE"],
  [45, "Tauhidur Rahman Sakib", "CSE"],
  [46, "MD Anamul Haque Akash", "EEE"],
  [47, "ZUBAIR UDDIN RAQEEB", "EEE"],
  [48, "Hasib Hossain Abir", "CSE"],
  [49, "Fabiha Fairuz", "CSE"],
  [50, "Sharaf Ahmed", "CSE"],
  [51, "Maisha Mahjabin Nidhi", "EEE"],
  [52, "Shahriar Ahmed", "EEE"],
  [53, "Kazi Abdur Rahim", "EEE"],
  [54, "Md. Rejoan Mehedi", "EEE"],
  [55, "S M Mahin Rahman", "CSE"],
  [56, "Iftekhar Uddin Tuhin", "EEE"],
  [57, "Ahnaf Tahmid Tasin", "EEE"],
  [58, "Ruhinul Haque Bhuiyan", "EEE"],
  [59, "Afnan Ahmed", "EEE"],
  [60, "Raisa Atahar Eniya", "EEE"],
  [61, "Asma Binte Haque", "EEE"],
  [62, "Sarker MD Shahariyar", "CS"],
  [63, "Sajrin Ahmed Tasmi", "EEE"],
  [64, "Oishee Basunia", "EEE"],
  [65, "Ishaq Muhammed Wakil", "EEE"],
  [66, "Rafid Bin Jinnah", "EEE"],
  [67, "Rydah Habib Yusha Win", "EEE"],
  [68, "Muhtasim Bin Mohsin Rauf", "EEE"],
  [69, "Adnin Sabira Hossain", "EEE"],
  [70, "Sarker MD Salahin", "EEE"],
  [71, "Navid Irteja Labib", "EEE"],
  [72, "Bitto George Hembrom", "EEE"],
  [73, "Ahnaf Tahmid Patwary", "EEE"],
  [74, "Khalid Saifullah", "EEE"],
  [75, "Zubian Muhammad Hasan", "EEE"],
  [76, "Ashfaqul Islam", "EEE"],
  [77, "Nazmour Shakir Promesha", "EEE"],
  [78, "Alvee Ara Lochon", "EEE"],
  [79, "Nusaiba Tabassum Khan", "EEE"],
  [80, "Syed Moshfequs Saleheen", "EEE"],
  [81, "Shahrial Iqra", "EEE"],
  [82, "Mahir Faisal Mohammad Zaim", "EEE"],
  [83, "Jemima Sikder Totinee", "EEE"],
  [84, "Arnab Sen", "CSE"],
  [85, "Nafisha Anjum Raisha", "EEE"],
  [86, "Khandaker Sazid Asfaque", "EEE"],
  [87, "Zaima Zaheen Hanna", "CSE"],
  [88, "Protik Saha Chowdhury", "EEE"],
  [89, "Thouhidul Islam Shovro", "EEE"],
  [90, "Rifah Nanzeba", "EEE"],
  [91, "Fardin Khan", "EEE"],
  [92, "Asnaf Quadir Chowdhury", "EEE"],
  [93, "Md. Saleh Ahmed Rahat", "CSE"],
  [94, "Tariqul Islam", "EEE"],
  [95, "Omaer Abdullah", "EEE"],
  [96, "Sumaiya Zaman Saba", "EEE"],
  [97, "Tasmin Ahmed Dia", "EEE"],
  [98, "Md. Mosiur Rahman Abir", "EEE"],
  [99, "Najiath Islam Siam", "EEE"],
  [100, "Nazeef Mashroor Chowdhury", "EEE"],
  [101, "Md Sahil Kamal", "EEE"],
  [102, "Rafid Khan", "EEE"],
  [103, "Mohammad Ishraq Hossain", "EEE"],
  [104, "ABHIJIT KARMAKAR", "EEE"],
  [105, "Anik Fouzder", "CSE"],
  [106, "Aditya Nandy", "EEE"],
  [107, "Shadid Al Akib", "EEE"],
  [108, "Meharab Bin Haque", "EEE"],
  [109, "Tasnia Binte Ashek", "CSE"],
  [110, "Tahmid Ali", "EEE"],
  [111, "Rafid Abrar Ahmed", "APE"],
  [112, "Syed Abrar Faiaz", "EEE"],
  [113, "Farhan Fuad Hasan", "EEE"],
  [114, "Daud Ibrahim Hassan", "CSE"],
  [115, "Sameen Sarwat", "EEE"],
  [116, "Sabrina Ahmed", "EEE"],
  [117, "Hasibur Rahman", "CSE"],
  [118, "Muzadded Rahman", "EEE"],
  [119, "Mohammad Arafat", "CSE"],
  [120, "Shouvik Saha", "EEE"],
  [121, "Zarif Mubasshir Ahmed", "EEE"],
  [122, "Nowrin Tanhiad", "CSE"],
  [123, "Ahamed Abdullah Al Rahi", "EEE"],
  [124, "Najah Tahrim", "EEE"],
  [125, "Md. Mahdi Islam", "EEE"],
  [126, "MD Ragib Shahriar", "CS"],
  [127, "Zahin Sherazad Gazi", "EEE"],
  [128, "Arifur Rahman Akash", "CSE"],
  [129, "Farhan Tanvir", "CSE"],
  [130, "MD WAHID ISFAR", "EEE"],
  [131, "Rakeen Abtahi", "EEE"],
  [132, "Raisa Khan", "CS"],
  [133, "Tahmid Haque", "EEE"],
  [134, "Sumiya Ahmed Jannat", "EEE"],
  [135, "Nafisa Karim Nazlee", "CS"],
  [136, "Mohammad Habibul Hassan Khan", "EEE"],
];

const studentMembers: StudentMember[] = rawStudentMembers2026.map(([sl, name, dept]) => ({
  sl,
  name,
  dept,
  chapters: getChaptersForStudent(sl, name),
  year: 2026,
}));

const ebFilters = ["All", "Main Body", "PES", "CS", "RAS", "AESS", "ComSoc", "EDS"];
const studentChapterFilters = ["All", "PES", "CS", "RAS", "AESS", "ComSoc", "EDS"];
const availableYears = [2026, 2025, 2024, 2023, 2022, 2021, 2020];

type SortKey = "sl" | "name" | "chapter" | "dept";

function MembersContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "students" ? "students" : "eb";

  const [activeTab, setActiveTab] = useState<"eb" | "students">(initialTab);
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [activeEbBody, setActiveEbBody] = useState<string>("All");
  const [activeStudentChapter, setActiveStudentChapter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortKey>("sl");
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  // Filtered EB Members
  const filteredEB = useMemo(() => {
    return ebMembers.filter((m) => {
      const matchYear = m.year === selectedYear;
      const matchBody = activeEbBody === "All" || m.body === activeEbBody;
      const matchSearch =
        search === "" ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.role.toLowerCase().includes(search.toLowerCase()) ||
        m.body.toLowerCase().includes(search.toLowerCase());
      return matchYear && matchBody && matchSearch;
    });
  }, [selectedYear, activeEbBody, search]);

  // Filtered and Sorted Student Members (Supporting Multiple Chapters per Student)
  const filteredAndSortedStudents = useMemo(() => {
    const list = studentMembers.filter((s) => {
      const matchYear = s.year === selectedYear;
      const matchChapter =
        activeStudentChapter === "All" || s.chapters.includes(activeStudentChapter);
      const matchSearch =
        search === "" ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.chapters.some((c) => c.toLowerCase().includes(search.toLowerCase())) ||
        s.dept.toLowerCase().includes(search.toLowerCase()) ||
        s.sl.toString().includes(search);
      return matchYear && matchChapter && matchSearch;
    });

    return list.sort((a, b) => {
      let cmp = 0;
      if (sortBy === "sl") cmp = a.sl - b.sl;
      else if (sortBy === "name") cmp = a.name.localeCompare(b.name);
      else if (sortBy === "chapter") cmp = a.chapters.join(", ").localeCompare(b.chapters.join(", "));
      else if (sortBy === "dept") cmp = a.dept.localeCompare(b.dept);
      return sortAsc ? cmp : -cmp;
    });
  }, [selectedYear, activeStudentChapter, search, sortBy, sortAsc]);

  const handleSort = (key: SortKey) => {
    if (sortBy === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortBy(key);
      setSortAsc(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F3EE] font-[family-name:var(--font-sans)]">
      {/* Header Hero */}
      <div className="relative overflow-hidden bg-[#0A2540]">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, #3E9BD6 0%, transparent 50%), radial-gradient(circle at 70% 60%, #00629B 0%, transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-[1320px] px-8 pb-16 pt-20">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Home
          </Link>
          <div className="mt-4 mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7FB4DA]">
            <span className="inline-block h-0.5 w-[26px] bg-[#7FB4DA]" />
            Members &amp; Leadership Directory
          </div>
          <h1 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            Memberlist by Year
          </h1>
          <p className="m-0 mt-4 max-w-[54ch] text-[16px] leading-[1.6] text-white/55">
            Browse Executive Body officers or sort and search student members across all technical societies &amp; chapters.
          </p>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/members/why-how-do-you-join-ieee"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Why &amp; How to Join →
            </Link>
            <Link
              href="/members/membership-benefits"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Membership Benefits →
            </Link>
          </div>
        </div>
      </div>

      {/* Primary Tab Switcher & Filter Bar */}
      <div className="border-b border-[#E3DFD5] bg-white shadow-sm">
        <div className="mx-auto max-w-[1320px] px-8 py-5">
          {/* Main Category Tabs */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-[#E3DFD5] pb-4">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setActiveTab("eb");
                  setSearch("");
                }}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-semibold transition-all ${
                  activeTab === "eb"
                    ? "bg-[#0A2540] text-white shadow-sm"
                    : "border border-[#E3DFD5] bg-[#FBFAF7] text-[#6E7178] hover:bg-[#F5F3EE] hover:text-[#191B1E]"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
                Executive Body Members
              </button>

              <button
                onClick={() => {
                  setActiveTab("students");
                  setSearch("");
                }}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-semibold transition-all ${
                  activeTab === "students"
                    ? "bg-[#0A2540] text-white shadow-sm"
                    : "border border-[#E3DFD5] bg-[#FBFAF7] text-[#6E7178] hover:bg-[#F5F3EE] hover:text-[#191B1E]"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                Student Members ({studentMembers.length})
              </button>
            </div>

            {/* Year Selector */}
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#6E7178]">
                Year:
              </span>
              <div className="flex gap-1.5 overflow-x-auto">
                {availableYears.map((y) => (
                  <button
                    key={y}
                    onClick={() => setSelectedYear(y)}
                    className={`rounded-lg px-3 py-1.5 text-[13px] font-semibold transition-all ${
                      selectedYear === y
                        ? "bg-[#00629B] text-white shadow-sm"
                        : "border border-[#E3DFD5] bg-[#FBFAF7] text-[#4A4E54] hover:bg-[#F5F3EE]"
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filter Pills & Search */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Filter pills depending on active tab */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6E7178]">
                {activeTab === "eb" ? "Body:" : "Chapter:"}
              </span>
              {(activeTab === "eb" ? ebFilters : studentChapterFilters).map((item) => {
                const isSelected =
                  activeTab === "eb" ? activeEbBody === item : activeStudentChapter === item;
                return (
                  <button
                    key={item}
                    onClick={() => {
                      if (activeTab === "eb") setActiveEbBody(item);
                      else setActiveStudentChapter(item);
                    }}
                    className={`rounded-full px-3.5 py-1 text-[12.5px] font-medium transition-all ${
                      isSelected
                        ? "bg-[#0A2540] text-white shadow-sm"
                        : "border border-[#E3DFD5] bg-[#FBFAF7] text-[#6E7178] hover:border-[#00629B]/30 hover:text-[#191B1E]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Live Search */}
            <div className="relative w-full md:w-[280px]">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B0B4B9]"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder={
                  activeTab === "eb"
                    ? "Search EB by name, body..."
                    : "Search student by name, chapter..."
                }
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-[#E3DFD5] bg-[#FBFAF7] py-2 pl-10 pr-4 text-[13px] text-[#191B1E] placeholder:text-[#B0B4B9] focus:border-[#00629B]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00629B]/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-[1320px] px-8 py-16">
        {activeTab === "eb" ? (
          /* ── TAB 1: Executive Body Grid ── */
          <div>
            {filteredEB.length === 0 ? (
              <div className="rounded-2xl border border-[#E3DFD5] bg-white py-20 text-center">
                <p className="text-[17px] font-medium text-[#6E7178]">
                  No Executive Body members found for {selectedYear}
                  {activeEbBody !== "All" ? ` in ${activeEbBody}` : ""}.
                </p>
                <button
                  onClick={() => {
                    setSelectedYear(2026);
                    setActiveEbBody("All");
                    setSearch("");
                  }}
                  className="mt-3 text-[14px] font-semibold text-[#00629B] hover:underline"
                >
                  View 2026 Executive Body
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                {filteredEB.map((m) => (
                  <div
                    key={m.name + m.body + m.year}
                    className="group flex flex-col items-center rounded-2xl border border-[#E3DFD5] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-[#00629B]/25 hover:shadow-[0_12px_32px_rgba(0,98,155,0.08)]"
                  >
                    {/* Clean circular portrait frame */}
                    <div className="relative mb-4 flex h-36 w-36 items-center justify-center rounded-full border-2 border-[#E3DFD5] bg-white p-1 shadow-sm transition-all duration-300 group-hover:border-[#00629B] group-hover:shadow-[0_8px_24px_rgba(0,98,155,0.14)] sm:h-40 sm:w-40">
                      <div className="relative h-full w-full overflow-hidden rounded-full bg-[#F5F3EE]">
                        <Image
                          src={m.image}
                          alt={m.name}
                          fill
                          sizes="(max-width: 640px) 144px, 160px"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    <span className="mb-1 rounded bg-[#F5F3EE] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#00629B]">
                      {m.body}
                    </span>
                    <h3 className="m-0 text-[15.5px] font-semibold text-[#191B1E]">
                      {m.name}
                    </h3>
                    <span className="mt-0.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#6E7178]">
                      {m.role}
                    </span>

                    {m.email && (
                      <a
                        href={`mailto:${m.email}`}
                        className="mt-3 inline-flex items-center gap-1 text-[12px] text-[#00629B] hover:underline"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Email
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* ── TAB 2: Student Members Table Sorted by Chapters (Multi-Chapter Support) ── */
          <div>
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="m-0 font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[#191B1E]">
                  IEEE BRACU SB Student Members · {selectedYear}
                </h2>
                <p className="m-0 mt-1 text-[13.5px] text-[#6E7178]">
                  Showing {filteredAndSortedStudents.length} registered student members
                  {activeStudentChapter !== "All" ? ` in ${activeStudentChapter}` : ""}
                  {search ? ` matching "${search}"` : ""}
                </p>
              </div>

              {/* Sort selector for quick switching */}
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6E7178]">
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                  className="rounded-lg border border-[#E3DFD5] bg-white px-3 py-1.5 text-[13px] font-medium text-[#191B1E] focus:border-[#00629B] focus:outline-none"
                >
                  <option value="chapter">Chapter / Society</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="sl">Serial Number (Sl.)</option>
                  <option value="dept">Department</option>
                </select>
                <button
                  onClick={() => setSortAsc(!sortAsc)}
                  title="Toggle Ascending / Descending"
                  className="rounded-lg border border-[#E3DFD5] bg-white p-1.5 text-[#6E7178] hover:bg-[#F5F3EE]"
                >
                  {sortAsc ? "▲" : "▼"}
                </button>
              </div>
            </div>

            {filteredAndSortedStudents.length === 0 ? (
              <div className="rounded-2xl border border-[#E3DFD5] bg-white py-20 text-center">
                <p className="text-[17px] font-medium text-[#6E7178]">
                  No student members found for {selectedYear}
                  {activeStudentChapter !== "All" ? ` in ${activeStudentChapter}` : ""}.
                </p>
                <button
                  onClick={() => {
                    setSelectedYear(2026);
                    setActiveStudentChapter("All");
                    setSearch("");
                  }}
                  className="mt-3 text-[14px] font-semibold text-[#00629B] hover:underline"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#E3DFD5] bg-[#0A2540] text-white">
                        <th
                          onClick={() => handleSort("sl")}
                          className="cursor-pointer px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/80 w-[90px] hover:text-white"
                        >
                          Sl. {sortBy === "sl" ? (sortAsc ? "▲" : "▼") : ""}
                        </th>
                        <th
                          onClick={() => handleSort("name")}
                          className="cursor-pointer px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/80 hover:text-white"
                        >
                          Full Name {sortBy === "name" ? (sortAsc ? "▲" : "▼") : ""}
                        </th>
                        <th
                          onClick={() => handleSort("chapter")}
                          className="cursor-pointer px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/80 hover:text-white"
                        >
                          Chapters / Societies {sortBy === "chapter" ? (sortAsc ? "▲" : "▼") : ""}
                        </th>
                        <th
                          onClick={() => handleSort("dept")}
                          className="cursor-pointer px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/80 text-right w-[140px] hover:text-white"
                        >
                          Dept. {sortBy === "dept" ? (sortAsc ? "▲" : "▼") : ""}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E3DFD5]">
                      {filteredAndSortedStudents.map((s) => (
                        <tr
                          key={s.sl}
                          className="transition-colors hover:bg-[#F5F3EE]/80"
                        >
                          <td className="px-6 py-3.5 text-[13.5px] font-medium text-[#6E7178]">
                            {s.sl}
                          </td>
                          <td className="px-6 py-3.5 text-[14.5px] font-semibold text-[#191B1E]">
                            {s.name}
                          </td>
                          <td className="px-6 py-3.5">
                            <div className="flex flex-wrap gap-1.5">
                              {s.chapters.map((ch) => (
                                <span
                                  key={ch}
                                  className="inline-block rounded-md bg-[#EAF1F6] px-2.5 py-0.5 text-[11.5px] font-semibold text-[#00629B]"
                                >
                                  {ch}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-3.5 text-right">
                            <span
                              className={`inline-block rounded-md px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.06em] ${
                                s.dept === "CSE"
                                  ? "bg-blue-50 text-blue-700"
                                  : s.dept === "EEE"
                                  ? "bg-amber-50 text-amber-800"
                                  : s.dept === "CS"
                                  ? "bg-emerald-50 text-emerald-800"
                                  : "bg-purple-50 text-purple-800"
                              }`}
                            >
                              {s.dept}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default function MembersPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F3EE] p-12 text-center text-[#6E7178]">Loading directory...</div>}>
      <MembersContent />
    </Suspense>
  );
}
