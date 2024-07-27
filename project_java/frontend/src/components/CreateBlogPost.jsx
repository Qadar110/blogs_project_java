import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useCallback, useState } from 'react';
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';


function CreateBlogPost() {
    const [content, setContent] = useState("");
    const [loading,setLoading] = useState(false)
    const user = JSON.parse(window.localStorage.getItem("user"))

    const onChange = useCallback((content) => {
      setContent(content);
      console.log(content);
    }, []);

    if(!user){
      window.location.pathname = "/login"
      return null;
    }

    async function handleSubmit(e){
        setLoading(true)
        e.preventDefault()
        const formData = new FormData(e.target)

        if(content === ""){
            toast.error("Content must provide")
            return
        }

        const post = {
            title:formData.get("title"),
            coverUrl:formData.get("coverUrl"),
            tags:formData.get("tags"),
            summary:formData.get("summary"),
            content,
            user_id:user?.id
        }

        await axios.post("http://localhost:8080/api/posts/create",post).then(()=>{
          window.location.pathname = "/"
        }).catch(()=>{
          toast.error("try again..")
          }).finally(()=>{
          setLoading(false)
        })
    }
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background container mx-auto">
        <div className="w-full max-w-4xl px-4 md:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground">Create a New Blog Post</h1>
              <p className="mt-2 text-muted-foreground">Write and publish your latest thoughts.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">
                  Title
                </Label>
                <div className="mt-1">
                  <Input
                    required
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter a title for your blog post"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="cover_url">
                  Url
                </Label>
                <div className="mt-1">
                  <Input
                    required
                    type="text"
                    id="coverUrl"
                    name="coverUrl"
                    placeholder="Enter a coverUrl for your blog post"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="tags">
                  Tags
                </Label>
                <div className="mt-1">
                  <Input
                    type="text"
                    id="tags"
                    name="tags"
                    placeholder="Enter a , separated tags for your blog post"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="summary">
                  Summary
                </Label>
                <div className="mt-1">
                  <Input
                    type="text"
                    id="summary"
                    name="summary"
                    placeholder="Enter a , separated summary for your blog post"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="content">
                  Content
                </Label>
                <div className="mt-1">
                    <SimpleMDE
                    value={content} 
                    onChange={onChange}
                    />
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  disabled={loading}
                  type="submit"
                >
                  Publish
                </Button>
              </div>
            </form>
          </div>
          <Link className="underline text-center text-blue-500" to="/">Back to blogs</Link>
        </div>
      </div>
    )
  }

export default CreateBlogPost