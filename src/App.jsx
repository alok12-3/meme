import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {/* Hidden image for Open Graph (WhatsApp preview) */}
      <img
        src="https://your-server.com/fake-preview.jpg"
        alt="OG Preview"
        style={{ display: "none" }}
      />

      {/* Display Rickroll GIF when the site opens */}
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTEyZmtybDdud2xoMjU3cng4bTJpZ2ppd2hjOXFsM3MzYjIxMzJ2aiZlcD12MV9pbnRlcm5naWZfYnlfaWQmY3Q9Zw/D8vC3ehZ1JpGE/giphy.gif"
        alt="Never Gonna Give You Up"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default App;
