
import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dWdhbmRhJTIwY29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80",
}) => {
  return (
    <div 
      className="relative bg-cover bg-center py-24 mb-12" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` 
      }}
    >
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-white max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
