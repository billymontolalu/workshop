const save = async () => {
  await fetch("/api/post", { method: "POST" });
};

export default function Page() {
  return (
    <div className="m-4">
      <h1>Add New Post</h1>
      <form>
        <label className="block">Title</label>
        <input className="border p-2 rounded-md" type="text" />
        <label className="block">Content</label>
        <input className="border p-2 rounded-md block" type="text" />
        <button className="bg-sky-500 px-5 py-1 text-white">Save</button>
      </form>
    </div>
  );
}
