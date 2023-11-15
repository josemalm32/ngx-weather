# ngx-weather

![npm](https://img.shields.io/npm/v/ngx-weather)
![npm](https://img.shields.io/npm/dm/ngx-weather)
[![GitHub license](https://img.shields.io/github/license/yourusername/ngx-weather)](https://github.com/yourusername/ngx-weather/blob/main/LICENSE)

## Description

`ngx-weather` is an Angular library that provides a weather widget for displaying current weather conditions and forecasts in your Angular applications. It's designed to be highly customizable and easy to integrate into your projects.

###### This library provide an api key from [weatherapi](https://www.weatherapi.com/signup.aspx)

## Features

- Display current weather conditions (temperature, description, icon).
- Show weather forecasts for the upcoming days.
- Highly customizable styles and layouts.
- Automatic geolocation detection or manual location setting.
- Units conversion (e.g., Celsius/Fahrenheit, metric/imperial).

## Installation

You can install `ngx-weather` via npm or yarn. Make sure you have Angular installed in your project.

```bash
npm install ngx-weather-api --save
# or
yarn add ngx-weather-api
```
## Getting Started
### Import the Module
In your Angular module, import and add the NgxWeatherModule to the imports array.
```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //...
    NgxWeatherModule.forRoot({
      apiKey: '--Your weatherapi key--'
      }),
    //...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
## Usage

### Weather Widget Component

In your template, use the `<ngx-weather>` component to display the weather widget. You can configure it with various options.

```angular2html
<ngx-weather
  [config]="{location: 'Tunisia'}"
></ngx-weather>
```
