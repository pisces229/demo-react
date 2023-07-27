import './tailwind1.css';
import './tailwind2.css';
// Responsive Design
// Breakpoint prefix  Minimum width
// sm	                640px
// md                 768px
// lg                 1024px
// xl	                1280px
// 2xl	              1536px
const Index = () => {
  return (
    <>
      <h1 className="text-black text-4xl font-bold sm:text-red-500 md:text-blue-500">
        Hello world! I am using React
      </h1>
      <hr></hr>
      <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
        Save changes
      </button>
      <button
        className="text-black bg-white dark:text-white dark:bg-black px-5 py-2 text-sm leading-5 rounded-full"
        onClick={() => {
          localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
          location.reload();
        }}
      >
        Dark Mode
      </button>
      <button className="btn1 bg-blue-500">按鈕 1</button>
      <button className="btn2 bg-blue-500">按鈕 2</button>
      <button className="btn3">按鈕 3</button>
      <button className="pages_app-style_btn4">按鈕 4</button>
      <button className="pages_app-style_btn5">按鈕 5</button>
      <button className="pages_app-style_btn6">按鈕 6</button>
      <hr></hr>
      <button className="src_pages_app-style_btn7-a bg-purple-500">
        按鈕 7-1
      </button>
      <button className="src_pages_app-style_btn7-a src_pages_app-style_btn7-u">
        按鈕 7-2
      </button>
      <button className="src_pages_app-style_btn7-b src_pages_app-style_btn7-c">
        按鈕 7-2
      </button>
      <button className="src_pages_app-style_btn7-b src_pages_app-style_btn7-c src_pages_app-style_btn7-u bg-purple-500">
        按鈕 7-3
      </button>
      <hr></hr>
      <button className="text-base bg-green-500 ">按鈕文字(Font Size)</button>
      <button className="text-[16px]/[24px] bg-green-500 ">
        按鈕文字(Custom Styles)
      </button>
      <button className="text-[1rem]/[1.5rem] bg-green-500 ">按鈕文字</button>
      <hr></hr>
      <div className="bg-red-500 w-52 grid grid-cols-3 gap-4">
        <div>01</div>
        <div className="invisible">02</div>
        <div>03</div>
      </div>
      <div className="bg-red-500 flex flex-row gap-4">
        <div className="basis-1/4">01</div>
        <div className="basis-1/4">02</div>
        <div className="basis-1/2">03</div>
      </div>
      <hr></hr>
      <ul role="list" className="p-6 divide-y divide-slate-200">
        <li className="flex py-4 first:pt-0 last:pb-0 first:text-red-500 last:text-blue-500">
          1
        </li>
        <li className="flex py-4 first:pt-0 last:pb-0 first:text-red-500 last:text-blue-500">
          2
        </li>
        <li className="flex py-4 first:pt-0 last:pb-0 first:text-red-500 last:text-blue-500">
          3
        </li>
        <li className="flex py-4 first:pt-0 last:pb-0 first:text-red-500 last:text-blue-500">
          4
        </li>
      </ul>
      <hr></hr>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-red-500 even:bg-blue-500">
            <td>Name</td>
            <td>Email</td>
          </tr>
          <tr className="odd:bg-red-500 even:bg-blue-500">
            <td>Name</td>
            <td>Email</td>
          </tr>
          <tr className="odd:bg-red-500 even:bg-blue-500">
            <td>Name</td>
            <td>Email</td>
          </tr>
          <tr className="odd:bg-red-500 even:bg-blue-500">
            <td>Name</td>
            <td>Email</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Index;
