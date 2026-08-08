function Footer() {
  return (
    <footer className="bg-secondary text-light p-8 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-primary font-bold mb-4">About</h3>
            <p className="text-sm">77 Gaming Portal - Your ultimate gaming destination</p>
          </div>
          
          <div>
            <h3 className="text-primary font-bold mb-4">Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-primary font-bold mb-4">Follow</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-primary">Twitter</a></li>
              <li><a href="#" className="hover:text-primary">Discord</a></li>
              <li><a href="#" className="hover:text-primary">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-light mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 77 Gaming Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
