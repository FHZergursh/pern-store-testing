import React from 'react'
import {ShoppingCartIcon} from "lucide-react"

const Navbar = () => {
  return (
    <div className='bg-base-100/80 backdrop:blur-lg border-b border-base-content/10 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='navbar px-4 min-h-4-[4rem] justify-between'>
           {/* LOGO */}
          <div className="flex-1 lg:flex-none">
            <ShoppingCartIcon className="size-9 text-primary" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar