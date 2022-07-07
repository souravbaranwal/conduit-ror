import React from "react";

const Post = ({ post }) => (
  <div className="mb-5 flex items-center justify-center">
    <div className="border w-9/12 rounded-xl bg-white p-5 shadow-md">
      <div className="border-b flex w-full items-center justify-between pb-3">
        <div className="flex items-center space-x-3">
          <div className="bg-slate-400 h-8 w-8 rounded-full bg-[url('https://i.pravatar.cc/32')]"></div>
          <div className="text-slate-700 text-lg font-bold">Joe Smith</div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="text-neutral-500 text-xs">2 hours ago</div>
        </div>
      </div>

      <div className="mt-4 mb-6">
        <div className="mb-3 text-xl font-bold">{post.title}</div>
        <div className="text-neutral-600 text-sm">{post.description}</div>
      </div>
      <div>
        <div className="text-slate-500 flex items-center justify-between">
          <div className="flex space-x-4 md:space-x-8">
            <div className="transition hover:text-slate-600 flex cursor-pointer items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1.5 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span>125</span>
            </div>
            <div className="transition hover:text-slate-600 flex cursor-pointer items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1.5 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Post;