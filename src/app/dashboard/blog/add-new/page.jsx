import DashboardMaster from "@/components/DashboardMaster";

export default function Page() {
    const [editorData, setEditorData] = useState("");
    let titleRef,
        imgCDNRef = useRef();

    const submit = (e) => {
        e.preventDefault();
        let title = titleRef.value;
        let imgCDN = imgCDNRef.value;
        let des = editorData;
        create_blog__Request__API({ title, imgCDN, des }).then((res) => {
            if (res) {
                SuccessToast("Blog add successful!");
                titleRef.value = "";
                imgCDNRef.value = "";
                setEditorData("");
                read_all_blog__Request__API().then((res) => {
                    setBlog(res.data);
                });
            }
        });
    };
    return (
        <DashboardMaster>
            <div className="grid ">
                <div className="p-5">
                    <h1 className="text-xl font-semibold">
                        Add Blog - please fill in your information to continue
                    </h1>
                    <div className="mt-6">
                        <div className="grid gap-5">
                            <div>
                                <label
                                    htmlFor="firstname"
                                    className="block text-xs font-semibold text-gray-600 uppercase"
                                >
                                    Blog Title
                                </label>
                                <input
                                    ref={(input) => (titleRef = input)}
                                    id="firstname"
                                    type="text"
                                    name="firstname"
                                    placeholder="Blog Title"
                                    autoComplete="given-name"
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="firstname"
                                    className="block text-xs font-semibold text-gray-600 uppercase"
                                >
                                    Image CDN
                                </label>
                                <input
                                    ref={(input) => (imgCDNRef = input)}
                                    id="firstname"
                                    type="text"
                                    name="firstname"
                                    placeholder="Image CDN"
                                    autoComplete="given-name"
                                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="firstname"
                                    className="block text-xs font-semibold text-gray-600 uppercase"
                                >
                                    Blog Description
                                </label>
                                <ReactQuill
                                    className=" block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner min-h-[250px] h-full pb-[50px]"
                                    theme="snow"
                                    value={editorData}
                                    onChange={setEditorData}
                                    modules={QuillScript.modules}
                                    formats={QuillScript.formats}
                                />
                            </div>
                        </div>
                        <button
                            onClick={submit}
                            type="submit"
                            className="w-full py-3 mt-[40px] font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                        >
                            Add Blog
                        </button>
                    </div>
                </div>
            </div>
        </DashboardMaster>

    )
}