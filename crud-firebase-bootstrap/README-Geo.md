# CURSO 1

* **https://www.youtube.com/watch?v=nEfemck6iNk&t=3791s*

# Crud Firebase Bootstrap (Angular 11)

## bootswatch

* **https://bootswatch.com/**
* **https://bootswatch.com/cosmo/**

```
npm i bootswatch
npm i bootstrap
npm i jquery
npm i @popperjs/core

npm i bootswatch bootstrap jquery @popperjs/core

importar variable bootswatch en styles.scss (Theme → cosmo)

@import "~bootswatch/dist/cosmo/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootswatch/dist/cosmo/bootswatch";

importar bootstrap en script agular.json

"scripts": 
[
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/@popperjs/core/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
]


```

## Versiones

```

    "bootswatch": "^4.6.0",
    "bootstrap": "^4.6.0",
    "jquery": "^3.6.0",
    "@popperjs/core": "^2.9.2",

    "@angular/fire": "^6.1.4",
    "firebase": "^7.0 || ^8.0",

```
## Componentes, Modules

```

ng g c shared/components/header --module app --skipTests (Componente)
ng g m shared/components/header --module app (Módulo)


Páginas módulos, ruta y componente:

ng g m pages/employees/list --module app --route list
ng g m pages/employees/new --module app --route new
ng g m pages/employees/details --module app --route details
ng g m pages/employees/edit --module app --route edit

Encapsular en un componente:

ng g c shared/components/employee-form --module app --skipTests
ng g m shared/components/employee-form --module app

Servicios:

 ng g s services/employees --skipTests

Instalar Firebase a través de Schematics:

Primero debe estar creado el proyecto de firebase, en enviroment.ts
En la consola se debe estar logueado en firebase con las herramientas de firebase-tools
ya que solicitara seleccionar el proyecto

ng add @angular/fire


https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md
https://fireship.io/snippets/install-angularfire/




```

## [ngClass] vs. [class]

```
Usando [ngClass] se puede aplicar múltiples clases de una manera realmente conveniente. Incluso puede aplicar una función que devolverá un objeto de clases. [class. permite aplicar solo una clase (por supuesto, se puede usar class. Algunas veces pero se ve muy mal).

<div [class.extra-sparkle]="isDelightful">
<div [ngClass]="{'extra-sparkle': isDelightful}">

<div [ngClass]="{'extra-sparkle': isDelightful,'extra-glitter':isGlitter}">

<div [ngClass]="a === b ? 'class1' : 'class2'">

```

## ng-class vs. ng-style

```
ng-style:

ng-style se usa para interpolar el objeto javascript en el atributo style , no en la clase css.
La siguiente directiva se traducirá a style = "color: red"

    ng-style="{color: 'red'}"

Hay un caso de uso más para ng-style. Si desea interpolar algo en el atributo de estilo, debería considerar usar ng-style. De lo contrario, eso no funcionaría antes de Internet Explorer 11 como documentación sugiere.

Entonces, en lugar de usar estilo:

    style="width: {{progress}}"

Use ng-style:

    ng-style="{'width':progress}"


ng-class:

Y la directiva ng-class traduce su objeto en clase atributo.
Lo siguiente se traducirá a clase = "eliminado" cuando se borra la variable es ¡cierto =.

    ng-class="{'deleted': isDeleted}"


```
# CURSO 2

# Angular 11 y Firebase, bootstrap 4 tutorial 🅰 Curso de Angular 11 en Español

## Formulario de contactos

* **https://www.youtube.com/watch?v=aXYN4WUR-b0&t=470s*
```
Páginas módulos, ruta y componente:

ng g m pages/home --module app --route home
ng g m pages/contact --module app --route contact

Files:

shared/models
shared/services


GUARDS:

Validar si el usuario esta llenando información en un formulario
y di cambia de pantalla le notifique que perdera la información

ng g guard shared/guards/contact --skipTests


```

## Hot Module Replacement (HMR)

```
Reemplazo de módulos activos

Se recargue solo la parte de la aplicación que fue modificada.

ng serve --hmr

```

## NUEVA RUTA

```
// Nueva ruta (si no hay ninguna ruta se direcciona a la ruta /home)
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```

## 

```


```


