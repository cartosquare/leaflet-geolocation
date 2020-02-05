var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {
    attribution: osmAttrib,
    detectRetina: true
});

// please replace this with your own mapbox token!
var token = 'pk.eyJ1IjoiZG9tb3JpdHoiLCJhIjoiY2o0OHZuY3MwMGo1cTMybGM4MTFrM2dxbCJ9.yCQe43DMRqobazKewlhi9w';
var mapboxUrl = 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}@2x?access_token=' + token;
var mapboxAttrib = 'Map data © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors. Tiles from <a href="https://www.mapbox.com">Mapbox</a>.';
var mapbox = new L.TileLayer(mapboxUrl, {
  attribution: mapboxAttrib,
  tileSize: 512,
  zoomOffset: -1
});

layer = new L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
            minZoom: 8,
            maxZoom: 18,
            attribution: '&copy; 病例数据：<a href="http://wjw.gz.gov.cn/ztzl/xxfyyqfk/yqtb/">广州市卫健委</a>，<a href="http://wjj.foshan.gov.cn/zwgk/gsgg/tzgg/">佛山市卫健委</a>，<a href="http://wjw.sz.gov.cn/yqxx/index_1.htm">深圳市卫健委</a>；底图设计：<a href="https://stamen.com/">Stamen Design</a>；地图数据：<a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        });

var map = new L.Map('map', {
    layers: [layer],
    center: [51.505, -0.09],
    zoom: 10,
    zoomControl: true
});

// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc = L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
