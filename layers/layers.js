var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TIsPA_1 = new ol.format.GeoJSON();
var features_TIsPA_1 = format_TIsPA_1.readFeatures(json_TIsPA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIsPA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TIsPA_1.addFeatures(features_TIsPA_1);
var lyr_TIsPA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TIsPA_1, 
                style: style_TIsPA_1,
                interactive: true,
                title: '<img src="styles/legend/TIsPA_1.png" /> TIsPA'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TIsPA_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TIsPA_1];
lyr_TIsPA_1.set('fieldAliases', {'Nome TI': 'Nome TI', 'Etnia': 'Etnia', 'Município': 'Município', 'UF': 'UF', 'Fase da TI': 'Fase da TI', 'Modalidade': 'Modalidade', 'Reestudo': 'Reestudo', });
lyr_TIsPA_1.set('fieldImages', {'Nome TI': '', 'Etnia': '', 'Município': '', 'UF': '', 'Fase da TI': '', 'Modalidade': '', 'Reestudo': '', });
lyr_TIsPA_1.set('fieldLabels', {'Nome TI': 'header label', 'Etnia': 'header label', 'Município': 'no label', 'UF': 'no label', 'Fase da TI': 'no label', 'Modalidade': 'no label', 'Reestudo': 'no label', });
lyr_TIsPA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});