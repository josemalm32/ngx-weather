# ngx-weather

![npm](https://img.shields.io/npm/v/ngx-weather)
![npm](https://img.shields.io/npm/dt/ngx-weather)
![NPM](https://img.shields.io/npm/l/ngx-weather)
![GitHub issues](https://img.shields.io/github/issues/iheb15M/ngx-weather)



## Overview

`ngx-weather` is an Angular library that provides a weather widget for displaying current weather conditions and forecasts in your Angular applications. It's designed to be highly customizable and easy to integrate into your projects.

> [!IMPORTANT]
> This library provide an api key from [weatherapi](https://www.weatherapi.com/signup.aspx)

## Features

- Display current weather conditions (temperature, description, icon).
- Show weather forecasts for the upcoming days.
- Automatic geolocation detection or manual location setting.
- Units conversion (Celsius/Fahrenheit).

## Supported Versions

| Angular Version  | ngx-weather Version |      Status       |
|:----------------:|:-------------------:|:-----------------:|
|     >= 16.x      |      >= 1.0.0       |    ✅ Supported    |
|      < 16.0      |      >= 1.0.0       |  ❌ Not Supported  |

## Installation

You can install `ngx-weather` via npm or yarn. Make sure you have Angular installed in your project.

```bash
npm install ngx-weather
# or
yarn add ngx-weather
```
## Usage
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

### Weather Widget Component

In your template, use the `<ngx-weather>` component to display the weather widget. You can configure it with various options.

```angular2html
<ngx-weather
  [options]="{location: 'Tunisia'}"
></ngx-weather>
```

### Additional Options

Here are the available options you can use when configuring the `NgxWeatherComponent`:

| Property           | Type                        | Required | Default Value | Description |
|:-------------------|:----------------------------|:---------:|:-------------:|:------------|
| `type`             | `WidgetTypeEnum`            | No        | "FORECAST"    | Widget type (day, week, or forecast) |
| `temperatureUnits` | `TemperatureUnitsEnum`      | No        | CELSIUS       | Temperature units (CELSIUS or FAHRENHEIT) |
| `lang`             | `LanguagesEnum` (optional)  | No        | "en"          | Language for weather information |
| `location`         | `string` or `PositionModel` | Yes       | `null`        | Weather location (string or `PositionModel`) |
| `days`             | `number`                    | No        | 3             | Number of days for weather forecast |



#### Social Links:
[![LinkedIn](https://img.shields.io/badge/LinkedIn-iheb--mejri-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/iheb-mejri/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-brightgreen?logo=github)](https://github.com/iheb15M/ngx-weather)

