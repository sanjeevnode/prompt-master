"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt, i) => (
        <PromptCard key={i} prompt={prompt} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompts] = useState([]); // [{}

  const filteredPosts = prompts.filter((prompt) => {
    return (
      prompt.tag.toLowerCase().includes(searchText.toLowerCase()) ||
      prompt.creator.username
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      prompt.prompt.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const handleTagClick = (tag) => {
    setSearchText(tag);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      data.reverse();
      setPrompts(data);
    };
    fetchPosts();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={filteredPosts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
