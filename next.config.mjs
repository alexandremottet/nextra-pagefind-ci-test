import nextra from "nextra";

const withNextra = nextra({
  // ... Other Nextra config options
});

export const nextConfig = {
  output: "standalone",
  basePath: "/docs",
  compress: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra(nextConfig);
