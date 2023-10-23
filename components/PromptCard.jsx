"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { set } from "mongoose";

const PromptCard = ({ prompt, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    setCopied(prompt.prompt);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };

  const handleCheckProfile = () => {
    if (session?.user.id === prompt.creator._id) {
      router.push("/profile");
    } else {
      router.push(`/profile/${prompt.creator._id}`);
    }
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start  items-center gap-3 cursor-pointer">
          <Image
            src={prompt.creator.image}
            alt="profile image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3
              onClick={handleCheckProfile}
              className="font-satoshi  w-fit font-semibold text-gray-900 hover:underline underline-offset-1"
            >
              {prompt.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {prompt.creator.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === prompt.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
            alt="copy"
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        {prompt.prompt}{" "}
      </p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => {
          handleTagClick && handleTagClick(prompt.tag);
        }}
      >
        {prompt.tag}
      </p>

      {session?.user.id === prompt.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            onClick={() => {
              handleEdit && handleEdit(prompt);
            }}
            className="font-inter text-sm green_gradient cursor-pointer"
          >
            Edit
          </p>
          <p
            onClick={() => {
              handleDelete && handleDelete(prompt);
            }}
            className="font-inter text-sm orange_gradient cursor-pointer"
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
