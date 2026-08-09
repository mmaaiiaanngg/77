function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-light p-8 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">77 Gaming</h3>
            <p className="text-sm">Your ultimate gaming destination</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary">Home</a></li>
              <li><a href="/games" className="hover:text-primary">Games</a></li>
              <li><a href="/dashboard" className="hover:text-primary">Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm">Email: info@77gaming.com</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
          </div>
        </div>
        
        <div className="border-t border-light pt-4 text-center text-sm">
          <p>&copy; {currentYear} 77 Gaming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer