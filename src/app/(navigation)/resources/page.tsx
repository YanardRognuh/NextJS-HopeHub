// /app/resources/page.tsx
"use client"

import { useState } from 'react';
import Image from 'next/image';
import Pagination from '@/app/components/Utilities/Pagination';

interface Article {
  id: number;
  title: string;
  year: number;
  summary: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Understanding Mental Health",
    year: 2022,
    summary: "An in-depth look into the various aspects of mental health and its importance.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Strategies for Suicide Prevention",
    year: 2021,
    summary: "Effective strategies and methods to prevent suicide and support those in need.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "The Role of Community in Mental Health",
    year: 2023,
    summary: "Exploring how community support can improve mental health outcomes.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Mental Health Resources for Teens",
    year: 2020,
    summary: "A comprehensive guide to mental health resources tailored for teenagers.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Dealing with Depression",
    year: 2019,
    summary: "Understanding depression and learning ways to cope and seek help.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Mindfulness and Mental Well-being",
    year: 2022,
    summary: "How mindfulness practices can contribute to better mental health.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Recognizing Signs of Anxiety",
    year: 2021,
    summary: "Identifying and understanding the signs and symptoms of anxiety.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "Support Systems for Mental Health",
    year: 2023,
    summary: "The importance of having a strong support system for mental health.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    title: "Mental Health in the Workplace",
    year: 2020,
    summary: "Addressing mental health issues in the workplace and providing support.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    title: "Coping with Loss and Grief",
    year: 2019,
    summary: "Strategies and resources for dealing with loss and grief.",
    image: "https://via.placeholder.com/150",
  },
  { id: 11, 
    title: "Article 11", 
    year: 2020, 
    summary: "Summary of article 11.", 
    image: "https://via.placeholder.com/150" }
];

const ITEMS_PER_PAGE = 5;

export default function Resources() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentArticles = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-black">
      <div className="container px-8 py-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold">Featured Articles and Resources</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
          {currentArticles.map((article) => (
            <div key={article.id} className="grid w-auto grid-cols-[auto,1fr] p-4 bg-white rounded-lg shadow-md card">
              <div className="flex items-center justify-center col-span-1">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="object-cover w-48 h-48 rounded-t-lg"
                />
              </div>
              <div className="col-span-1 p-4">
                <h2 className="mb-2 text-xl font-bold text-black">{article.title}</h2>
                <p className="mb-2 text-gray-600">Year: {article.year}</p>
                <p className="text-gray-700">{article.summary}</p>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}