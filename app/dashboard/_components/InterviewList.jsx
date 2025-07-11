"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { desc } from "drizzle-orm";
import InterviewItemCard from "./InterviewItemCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const InterviewList = () => {
  const { user } = useUser();
  const [interviewList, setInterviewList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

useEffect(() => {
user&&GetInterviewList();
}, [user]);

  const GetInterviewList = async () => {
       try {
      setLoading(true);
      const result = await db
        .select()
        .from(MockInterview)
        .where(
          eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
        .orderBy(desc(MockInterview.id));

      setInterviewList(result);
    } catch (error) {
      console.error("Failed to fetch interviews:", error);
    } finally {
      setLoading(false);
    }
    
  };
  return (
    <div>
      <h2 className="font-medium text-xl">Previous Mock Interview</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 '>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-4 border rounded-xl shadow-md">
                <Skeleton height={20} width={"80%"} />
                <Skeleton height={15} width={"60%"} className="mt-2" />
                <Skeleton height={100} className="mt-4" />
              </div>
            ))
          : interviewList.map((interview, index) => (
              <InterviewItemCard interview={interview} key={index} />
            ))}
      </div>
    </div>
  );
};

export default InterviewList;
