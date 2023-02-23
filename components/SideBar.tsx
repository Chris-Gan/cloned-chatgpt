"use client";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import React from "react";
import NewChat from "./NewChat";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const SideBar = () => {
  const { data: session } = useSession();
  const [chats, loading, errors] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );

  return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div className="">
          <NewChat />
          <div className="hidden sm:inline">
            <ModelSelection />
          </div>
          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {chats?.docs?.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <div
          onClick={() => signOut()}
          className="flex border border-gray-700 chatRow justify-start"
        >
          <ArrowRightOnRectangleIcon className="h-4 w-4" />
          <p className="px-2">Log out</p>
        </div>
      )}
    </div>
  );
};

export default SideBar;
