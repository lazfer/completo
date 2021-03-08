import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../interfaces/post';
import { Usuarios } from '../../interfaces/usuarios';
import { WebAPIService } from '../../services/web-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public posts: Post[] = [];
  constructor(private serPost: WebAPIService,
    private router: Router,
    private routeActive: ActivatedRoute ) { }

  ngOnInit(): void {
   this.routeActive.paramMap.subscribe( params => {
     // Valida si existe el parametro id en la url
  if(params.has('id')){
     this.serPost.getUsuarioId(params.get("id")).subscribe( (res: any[]) => {
      this.posts = res;
     });
  } else {
     this.serPost.getPost().subscribe( res => {
       this.posts = res;
     })
  }
   })
  }
  goUsuarios(){
    this.router.navigate(['/usuarios']);
  }

}
