import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Video } from '../model/video';

@Injectable({
  providedIn: 'root',
})
export class CourService {
  public videoParts: Video[];

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
    
    ) {
      http.get<any>("https://pfa-apde.herokuapp.com/test-vod").subscribe(
        (res) => { console.log("COOkies")}
      );
      console.log("here");
      // this.cookieService.set(
      //   "CloudFront-Key-Pair-Id",
      //   "APKAIAYQTYQLETSXYPDQ",
      //   // new Date("Wed, 25 May 2022 14:57:13 GMT"),
      //   // "/",
      //   // ".d1r0brkdem2ao6.cloudfront.net",
      //   // true,
      //   // "None"
      //   );
      //   console.log(this.cookieService.get("CloudFront-Key-Pair-Id"));
      // this.cookieService.set(
      //   "CloudFront-Signature",
      //   "fRS-lpi1r7fCs27O~8WiNRJTewuZieVHknaQepbC3aSKSdsc~pIXYH1JuZXGG6KMl4lCA2mzA~4~Ke8u2T8NMOmTf2559eurC9KZizM2k10RmdQnyk3hHMvgb54-0s0MbhPWZPZF4jaGKAzTcRD6lRK4N8rbg5VIyExBXQOVBz78N2F8qQ6-sl5xjQX-CC79AJ4TT5qLAmIDZfo1BwKTIvf5q5-j6ljWWZErlYJtC7u50Q21mnsAJPNm0MlrzAe7QpuqnTN1Lis1uS-zpYER-QMOBIk8a1sSAhUOevbm4fjcm--ai~wpHyM~q6CuM9qjgr5KLZq~EIQLl4iwSknjQg__",
      //   // new Date("Wed, 25 May 2022 14:57:13 GMT"),
      //   // "/",
      //   // ".d1r0brkdem2ao6.cloudfront.net",
      //   // true,
      //   // "None"
      //   );
      // this.cookieService.set(
      //   "CloudFront-Policy",
      //   "eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cDovL2QxcjBicmtkZW0yYW82LmNsb3VkZnJvbnQubmV0LzM5YTg5NTFhLWRjYWEtNDQ1Ny1iZDM3LWQ2ZTU0NDhhMTBmZS9BcHBsZUhMUzEvMDEtSW50cm8ubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY3MzQ3ODAwMH19fV19",
      //   // new Date("Wed, 25 May 2022 14:57:13 GMT"),
      //   // "/",
      //   // ".d1r0brkdem2ao6.cloudfront.net",
      //   // true,
      //   // "None"
      //   );
    this.videoParts = [
      new Video(
        [
          {
            src: 'http://d1r0brkdem2ao6.cloudfront.net/39a8951a-dcaa-4457-bd37-d6e5448a10fe/AppleHLS1/01-Intro.m3u8',
            type: 'video',

          },

        ],
        'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
        [
          {
            kind: 'captions',
            label: 'English',
            srclang: 'en',
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
            default: true,
          },
          {
            kind: 'captions',
            label: 'French',
            srclang: 'fr',
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
          },
        ],
        'Part 1 of the movie',
        '5:01'
      ),
      new Video(
        [
          {
            src: 'https://mediapde-frct1.streaming.media.azure.net/7fec810a-d338-43c6-aa77-8da9437c2901/02-Interet.ism/manifest(format=m3u8-aapl)',
            type: 'video',

          },

        ],
        'https://store-images.s-microsoft.com/image/apps.3260.13532175964152527.234bf515-7ad5-4cc6-b14b-0fe7095dd66d.95c771b8-5fa4-46f7-838e-ab6ed97f6746?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg',
        [
          {
            kind: 'captions',
            label: 'English',
            srclang: 'en',
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
            default: true,
          },
          {
            kind: 'captions',
            label: 'French',
            srclang: 'fr',
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
          },
        ],
        'Part 2 of the movie',
        '4:21'
      ),
      new Video(
        [
          {
            src: 'https://mediapde-frct1.streaming.media.azure.net/7fec810a-d338-43c6-aa77-8da9437c2901/02-Interet.ism/manifest(encryption=cbc)',
            type: 'video',

          },
        ],
        'https://store-images.s-microsoft.com/image/apps.3260.13532175964152527.234bf515-7ad5-4cc6-b14b-0fe7095dd66d.95c771b8-5fa4-46f7-838e-ab6ed97f6746?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg',
        [
          {
            kind: 'captions',
            label: 'English',
            srclang: 'en',
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
            default: true,
          },
          {
            kind: 'captions',
            label: 'French',
            srclang: 'fr',
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
          },
        ],
        'Part 3 of the movie',
        '3:01'
      ),
    ];
  }

  getFakeVideo() : Video[] {
    return this.videoParts ;
  }

  getVideo(): Observable<Video>{
    return this.http.get<Video>('http://localhost:3000/video/media?filename=01-Intro.mp4') ;

  }






}
