import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/core/model/Config';
import { ConfigService } from 'src/app/core/service/configService/config.service';

@Component({
  selector: 'app-htpclientsample',
  templateUrl: './htpclientsample.component.html',
  styleUrls: ['./htpclientsample.component.css']
})
export class HtpclientsampleComponent implements OnInit {
  
  config: Config | undefined;
  sampleUrl: string = "";
  textFileUrl: string = "";

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.ShowConfig();
  }

  ShowConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) =>
        this.displayConfig(data));
  }

  displayConfig(config: Config) {
    this.sampleUrl = config.sampleUrl;
    this.textFileUrl = config.textfile;
  }
}
