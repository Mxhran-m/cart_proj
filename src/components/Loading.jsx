import React from "react";

export default function Loading() {
    return (
      <div className="h-full w-screen flex items-center justify-center">
        <div className="flex items-center justify-center space-x-2">
            <div className="h-5 w-5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]"></div>
            <div className="h-5 w-5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.13s]"></div>
            <div className="h-5 w-5 animate-bounce rounded-full bg-blue-500"></div>
        </div>
      </div>
    )
  }


  