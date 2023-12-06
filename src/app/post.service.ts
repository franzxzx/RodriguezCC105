import { EventEmitter, Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostService{
  listChangeEvent: EventEmitter<Post[]>  = new EventEmitter();
    listOfPosts: Post[] = [
        // new Post(
        //   'Cat',
        //   'https://storage.googleapis.com/pai-images/6082b18877c4491b8625b3b839b662e3.jpeg',
        //   'Persian',
        //   'sicnarf',
        //   new Date(),1,[],
        //   ),
        // new Post(
        //   'SK Chairman',
        //   'https://scontent.fmnl25-1.fna.fbcdn.net/v/t39.30808-6/393262143_3743837615861513_8427903387944603740_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH8aoohqG3NzG7vAbrm2eHq69TVhJ6IVCnr1NWEnohUKQLP6peH2-kAV7qpnfNTE3-ROyl3CzXU5MuqRCMukkYK&_nc_ohc=uvkU0F7ucWkAX9Oef8J&_nc_ht=scontent.fmnl25-1.fna&oh=00_AfC8xVwyYOs5T7oxIrQxBPLEdZnRBg5FfixZRwyKY_m1dw&oe=654D64F7',
        //   'I BOTO!',
        //   'Lerit',
        //   new Date(),1,[],
        // )
      ];
      getPost() {
        return this.listOfPosts;
      }
      deleteButton(index: number){
        this.listOfPosts.splice(index, 1)
      }
      addPost(post: Post){
        this.listOfPosts.push(post);
      }
      updatePost(index: number, post: Post){
        this.listOfPosts[index] = post;
      }
      getSpecPost(index: number){
        return this.listOfPosts[index]
      }
      LikePost(index: number)   {
        this.listOfPosts[index].numberoflikes +=1;
      }
      addComment(index: number, comment: string) {
        if (!this.listOfPosts[index].comment) {
            this.listOfPosts[index].comment = [];
        }
        this.listOfPosts[index].comment.push(comment);
      }
      setPosts(newlistofPost: Post[]) {
        this.listOfPosts = newlistofPost;
        this.listChangeEvent.emit(newlistofPost);
      }
}