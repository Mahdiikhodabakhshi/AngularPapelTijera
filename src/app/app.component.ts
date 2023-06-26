import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ganajuego='GANA';
  ganador ='';
  img = '../assets/foto/default.png';
  winround = 'COMIENZA JUEGO';
  cpu=0;
  puntosj=0;
  barraj = 0;
  puntoscpu = 0;
  barracpu = 0;
  btncpu=[
    'btn-primary',
    'btn-primary',
    'btn-primary',
    'btn-primary',
    'btn-primary'
  ]
  btnjugador=[
    'btn-primary',
    'btn-primary',
    'btn-primary',
    'btn-primary',
    'btn-primary'
  ]

  numeroPartidos = 5;
  prBarra=20;
  
  dis = '';

  btnj= '';
  btnp = '';
  Ronda=[
    'btn-secondary',
    'btn-secondary',
    'btn-secondary'

  ]
  iniciojuego (jugador : number){
    this.cpu = Math.floor(Math.random()*5);
    this.partido(this.numeroPartidos);
    this.colorcpu(this.cpu);
    this.colorjugador(jugador);
    switch(this.cpu){
      case 0 :
        if (jugador == 0) {
          this.empate();
          this.img = '../assets/foto/default.png';

        }else if (jugador == 1) {
          this.ganaJugador();
          this.img = '../assets/foto/tijera.jpg';
        }else if (jugador == 2) {
          this.ganaCPU();
          this.img = '../assets/foto/papel.png';

        }else if (jugador == 3) {
          this.ganaJugador();
          this.img = '../assets/foto/lizard.png';
        }else if (jugador == 4) {
          this.ganaCPU();
          this.img = '../assets/foto/papel.png';
          
        }
        break;

        case 1:
      if (jugador == 0) {
       this.ganaCPU();
       this.img = '../assets/foto/tijera.jpg';


      }else if (jugador == 1) {
        this.empate();
        this.img = '../assets/foto/default.png';
      }else if (jugador == 2) {
        this.ganaJugador();
        this.img = '../assets/foto/rock.png';

      }else if (jugador == 3) {
        this.ganaCPU();
        this.img = '../assets/foto/lizard.png';
      }else if (jugador == 4) {
        this.ganaJugador();
        this.img = '../assets/foto/spook.jpg';
        
      }
      break;

      case 2:
        if (jugador == 0) {
          this.ganaJugador();
          this.img = '../assets/foto/papel.png'
        }else if (jugador == 1) {
          this.ganaCPU();
          this.img = '../assets/foto/rock.png';
        }else if (jugador == 2) {
          this.empate();
          this.img = '../assets/foto/default.png';
        }else if (jugador == 3) {
          this.ganaCPU();
          this.img = '../assets/foto/rock.png';
        }else if (jugador == 4) {
          this.ganaJugador();
          this.img = '../assets/foto/spook.jpg';          
        }
        break;
        case 3:
          if (jugador == 0) {
            this.ganaCPU();
            this.img = '../assets/foto/lizard.png'
          }else if (jugador == 1) {
            this.ganaJugador();
            this.img = '../assets/foto/tijera.jpg';
          }else if (jugador == 2) {
            this.ganaJugador();
            this.img = '../assets/foto/rock.png';
          }else if (jugador == 3) {
            this.empate();
            this.img = '../assets/foto/default.png';
          }else if (jugador == 4) {
            this.ganaCPU();
            this.img = '../assets/foto/lizard.png';          
          }
          break;
          case 4:
            if (jugador == 0) {
              this.ganaJugador();
              this.img = '../assets/foto/papel.png'
            }else if (jugador == 1) {
              this.ganaCPU();
              this.img = '../assets/foto/spook.jpg';
            }else if (jugador == 2) {
              this.ganaCPU();
              this.img = '../assets/foto/spook.jpg';
            }else if (jugador == 3) {
              this.ganaJugador();
              this.img = '../assets/foto/lizard.png';
            }else if (jugador == 4) {
              this.empate();
              this.img = '../assets/foto/default.png';          
            }
            break;


    }
    
    if (this.puntoscpu == this.numeroPartidos) {
      alert(this.ganador='CPU ha ganado juego');
      this.img = '../assets/foto/gameOver.gif';   
      this.btnj='disable';
      this.ganajuego='CPU';
    }
    if (this.puntosj == this.numeroPartidos) {
      alert(this.ganador=' has ganado juego');
      this.img = '../assets/foto/winGame.gif';   
      this.btnj='disable';
      this.ganajuego='TU';

    }
  }


  empate(){
    this.winround = 'emapte';
  }

  ganaJugador(){
    this.winround = 'jugador gana';
    this.puntosj++;
    this.barraj = this.barraj +this.prBarra;

  }

  ganaCPU(){
    this.winround = 'CPU gana';
    this.puntoscpu++;
    this.barracpu = this.barracpu +this.prBarra;
  
  }


  colorcpu( num:number ): void{
    
    this.btncpu = this.btncpu.map((color, index) => {
      return index === num ? "btn-danger" : "btn-primary";
    });
  }
  colorjugador( num:number ): void{
    
    this.btnjugador = this.btnjugador.map((color, index) => {
      return index === num ? "btn-success" : "btn-primary";
    });
  }
  



  reiniciar(){
    
  this.img = '../assets/foto/default.png';
  this.winround = 'COMIENZA JUEGO';
  this.cpu=0;
  this.puntosj=0;
  this.barraj = 0;
  this.puntoscpu = 0;
  this.barracpu = 0;
  this.btncpu=[
    'btn-primary',
    'btn-primary',
    'btn-primary',
    'btn-primary',
    'btn-primary'
  ]
  this.dis = '';
  this.btnj= '';
  this.btnp = '';
  this.numeroPartidos = 5;
  this.prBarra = 20;
  this.Ronda=[
    'btn-secondary',
    'btn-secondary',
    'btn-secondary'

  ]
  this.btnjugador=[
    'btn-primary',
    'btn-primary',
    'btn-primary',
    'btn-primary',
    'btn-primary'
  ]
  this.ganajuego='GANA';

  }

  partido(num : number){
    this.dis = 'disabled';
    if (num == 2) {
      this.numeroPartidos = 2;
      this.prBarra = 50;
     
    
        this.Ronda = this.btncpu.map((color, index) => {
          return index === 0 ? "btn-warning" : "btn-secondary";
        
      })

    }else if (num == 5) {
      this.numeroPartidos = 5;
      this.prBarra = 20;
      this.Ronda= this.btncpu.map((color, index) => {
        return index === 1 ? "btn-warning" : "btn-secondary";
      
    })

    }else if (num == 10) {
      this.numeroPartidos = 10;
      this.prBarra = 10;
      this.Ronda= this.btncpu.map((color, index) => {
        return index === 2 ? "btn-warning" : "btn-secondary";
      
    })

    }

  }
 }


