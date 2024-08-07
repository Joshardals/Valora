/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cloud.appwrite.io',
          },
        ],
      },
    async rewrites() {
        return [
            {
                source: "/api/v1/:path*", 
                destination: "http://localhost:5000/api/v1/:path*"
            }, 
        ]
    }
};

export default nextConfig;
