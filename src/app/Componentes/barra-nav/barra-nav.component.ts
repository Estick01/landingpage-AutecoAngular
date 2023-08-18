import { Component, ElementRef, ViewChild, Renderer2,HostListener,OnInit } from '@angular/core';
 const Rojo ='rgb(214, 45, 45)'
 const Naranja = 'rgb(217 104 25);'
 const Azul = 'rgb(71, 84, 201);'
 const Flex = 'flex'
 const Aumentar = 'scale(1.05)'
@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit  {

  @ViewChild('navbar', { static: true }) navbar!: ElementRef;
  ngOnInit(): void {
    this.updateNavbarPosition();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateNavbarPosition();
  }

  updateNavbarPosition() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 100) {
      this.navbar.nativeElement.style.top = '-30px';
    } else {
      this.navbar.nativeElement.style.top = '0px';
    }
  }
  @ViewChild("titulo_deportiva") public TituloDeportiva!: ElementRef;
  @ViewChild("deportivas") public mitagDeportivas!: ElementRef;
  @ViewChild("titulo_trabajo") public mitagTitulo!: ElementRef;
  @ViewChild("trabajo") public mitagTrabajo!: ElementRef;
  @ViewChild("scooter") public mitagScooter!: ElementRef;
  @ViewChild("motocarro") public mitagMotocarro!: ElementRef;
  @ViewChild("semiautomaticas") public mitagSemiautomaticas!: ElementRef;
  @ViewChild("naked") public mitagNaked!: ElementRef;
  @ViewChild("travel") public mitagTravel!: ElementRef;
  @ViewChild("enduro") public mitagEnduro!: ElementRef;
  @ViewChild("motocross") public mitagMotocross!: ElementRef;
  @ViewChild("supersport") public mitagSupersport!: ElementRef;
  @ViewChild("supermoto") public mitagSupermoto!: ElementRef;
  @ViewChild("eride") public mitagERide!: ElementRef;
  @ViewChild('husMotocross') public mitagHusMotocross!: ElementRef;
  @ViewChild('husEnduro') public mitagHusEnduro!: ElementRef;
  @ViewChild('husTravel') public mitagHusTravel!: ElementRef;
  @ViewChild('husSupermoto') public mitagHusSupermoto!: ElementRef;
  @ViewChild('husSvartpilen') public mitagHusSvartpilen!: ElementRef;
  @ViewChild('husElectricBikes') public mitagHusElectricBikes!: ElementRef;

  constructor(private renderer: Renderer2) {}
  //Hover de los porductos mostrados en el nav de motos tvs:trabajo
 
  onMouseEnterTitulo() {
    this.renderer.setStyle(this.mitagTitulo.nativeElement, 'color',Rojo);
    this.renderer.setStyle(this.mitagTitulo.nativeElement, 'transform',Aumentar);
  }
  onMouseLeaveTitulo(){
    this.renderer.setStyle(this.mitagTitulo.nativeElement, 'color', '');
    this.renderer.setStyle(this.mitagTitulo.nativeElement, 'transform','');
  }
  onMouseEnterTrabajo() {
    this.renderer.setStyle(this.mitagTrabajo.nativeElement,'display',Flex);
  }
  onMouseLeaveTrabajo() {
    this.renderer.setStyle(this.mitagTrabajo.nativeElement, 'display','');
  }
  onMouseEnterTituloDeportivas() {
    this.renderer.setStyle(this.TituloDeportiva.nativeElement, 'color',Rojo);
    this.renderer.setStyle(this.TituloDeportiva.nativeElement, 'transform',Aumentar);
  }
  onMouseLeaveTituloDeportivas(){
    this.renderer.setStyle(this.TituloDeportiva.nativeElement, 'color', '');
    this.renderer.setStyle(this.TituloDeportiva.nativeElement, 'transform','');
  }
  onMouseEnterDeportivas() {
    this.renderer.setStyle(this.mitagDeportivas.nativeElement, 'display', Flex);
  }
  onMouseLeaveDeportivas() {
    this.renderer.setStyle(this.mitagDeportivas.nativeElement, 'display', '');
  }
  onMouseEnterScooter() {
    this.renderer.setStyle(this.mitagScooter.nativeElement, 'display', 'flex');
  }
  onMouseLeaveScooter() {
    this.renderer.setStyle(this.mitagScooter.nativeElement, 'display', '');
  }
  onMouseEnterMotocarro() {
    this.renderer.setStyle(this.mitagMotocarro.nativeElement, 'display', 'flex');
  }
  onMouseLeaveMotocarro() {
    this.renderer.setStyle(this.mitagMotocarro.nativeElement, 'display', '');
  }
  onMouseEnterSemiautomaticas() {
    this.renderer.setStyle(this.mitagSemiautomaticas.nativeElement, 'display', 'flex');
  }
  onMouseLeaveSemiautomaticas() {
    this.renderer.setStyle(this.mitagSemiautomaticas.nativeElement, 'display', '');
  }
  onMouseEnterNaked() {
    this.renderer.setStyle(this.mitagNaked.nativeElement, 'display', 'flex');
  }
  onMouseLeaveNaked() {
      this.renderer.setStyle(this.mitagNaked.nativeElement, 'display', '');
  }
  onMouseEnterTravel() {
      this.renderer.setStyle(this.mitagTravel.nativeElement, 'display', 'flex');
  }
  onMouseLeaveTravel() {
      this.renderer.setStyle(this.mitagTravel.nativeElement, 'display', '');
  }
  onMouseEnterEnduro() {
      this.renderer.setStyle(this.mitagEnduro.nativeElement, 'display', 'flex');
  }
  onMouseLeaveEnduro() {
      this.renderer.setStyle(this.mitagEnduro.nativeElement, 'display', '');
  }
  onMouseEnterMotocross() {
      this.renderer.setStyle(this.mitagMotocross.nativeElement, 'display', 'flex');
  }
  onMouseLeaveMotocross() {
      this.renderer.setStyle(this.mitagMotocross.nativeElement, 'display', '');
  }
  onMouseEnterSupersport() {
      this.renderer.setStyle(this.mitagSupersport.nativeElement, 'display', 'flex');
  }
  onMouseLeaveSupersport() {
      this.renderer.setStyle(this.mitagSupersport.nativeElement, 'display', '');
  }
  onMouseEnterSupermoto() {
      this.renderer.setStyle(this.mitagSupermoto.nativeElement, 'display', 'flex');
  }
  onMouseLeaveSupermoto() {
    this.renderer.setStyle(this.mitagSupermoto.nativeElement, 'display', '');
  }
  onMouseEnterEride() {
    this.renderer.setStyle(this.mitagERide.nativeElement, 'display', 'flex');
  }
  onMouseLeaveEride() {
    this.renderer.setStyle(this.mitagERide.nativeElement, 'display', '');
  }
  onMouseEnterHusMotocross() {
    this.renderer.setStyle(this.mitagHusMotocross.nativeElement, 'display', 'flex');
  }
  onMouseLeaveHusMotocross() {
  this.renderer.setStyle(this.mitagHusMotocross.nativeElement, 'display', '');
  }
  onMouseEnterHusEnduro() {
  this.renderer.setStyle(this.mitagHusEnduro.nativeElement, 'display', 'flex');
  }
  onMouseLeaveHusEnduro() {
  this.renderer.setStyle(this.mitagHusEnduro.nativeElement, 'display', '');
  }
  onMouseEnterHusTravel() {
  this.renderer.setStyle(this.mitagHusTravel.nativeElement, 'display', 'flex');
  }
  onMouseLeaveHusTravel() {
  this.renderer.setStyle(this.mitagHusTravel.nativeElement, 'display', '');
  }
  onMouseEnterHusSupermoto() {
  this.renderer.setStyle(this.mitagHusSupermoto.nativeElement, 'display', 'flex');
  }
  onMouseLeaveHusSupermoto() {
  this.renderer.setStyle(this.mitagHusSupermoto.nativeElement, 'display', '');
  }
  onMouseEnterHusSvartpilen() {
  this.renderer.setStyle(this.mitagHusSvartpilen.nativeElement, 'display', 'flex');
  }
  onMouseLeaveHusSvartpilen() {
  this.renderer.setStyle(this.mitagHusSvartpilen.nativeElement, 'display', '');
  }
  onMouseEnterHusElectricBikes() {
  this.renderer.setStyle(this.mitagHusElectricBikes.nativeElement, 'display', 'flex');
  }
  onMouseLeaveHusElectricBikes() {
  this.renderer.setStyle(this.mitagHusElectricBikes.nativeElement, 'display', '');
  }         
}      


  

