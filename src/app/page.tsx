const mockUrls = [
  "https://utfs.io/f/6251f66e-4a8f-4c73-b0d3-39e4151eb606-s4b69s.jpg",
  "https://utfs.io/f/7f80c5fb-c763-4102-aa4a-a42dcab6e6dd-3zkkhs.jpg",
  "https://utfs.io/f/5d6bbc2e-035a-4a92-8654-46f74f9215e8-u8vp3o.jpg",
  "https://utfs.io/f/50ea9b90-71c5-41db-bc90-3924c64853dc-qqm050.jpg",
];

export default function HomePage() {
  return (
    <main className="flex flex-wrap gap-4">
      {[...mockUrls, ...mockUrls, ...mockUrls, ...mockUrls].map(
        (url, index) => (
          <div key={index + 1} className="w-48">
            <img src={url} alt={url} />
          </div>
        ),
      )}
    </main>
  );
}
