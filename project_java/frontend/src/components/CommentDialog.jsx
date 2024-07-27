import React from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { MessageCircleIcon } from 'lucide-react'
import CommentForm from './CommentForm'
import { DialogTitle } from '@radix-ui/react-dialog'
import Comments from './Comments'

const CommentDialog = ({ post_id,title }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button variant="ghost" size="icon">
            <MessageCircleIcon className="w-5 h-5" />
            <span className="sr-only">Comment</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className='font-black'>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex items-start flex-col">
            <Comments post_id={post_id} />
        </div>
        <DialogFooter className="sm:justify-start">
            <CommentForm post_id={post_id} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CommentDialog
