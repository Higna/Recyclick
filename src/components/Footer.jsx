import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white-500 text-black py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Recyclick Africa. <br></br> All rights reserved.</p>
        <p>Follow us on social media!</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer