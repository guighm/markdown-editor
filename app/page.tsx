"use client"

import CreateMarkdownButton from "@/components/CreateMarkdownButton";
import DocumentsList from "@/components/DocumentsList";

const Page = () => {

  return (
    <div className="min-h-screen">
      <CreateMarkdownButton />
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance p-[30px]">
        Markdown Editor
      </h1>
      <div className="p-6 max-w-xl mx-auto">
        <DocumentsList />
      </div>
    </div>
  )
}

export default Page;