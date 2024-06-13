var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_District_join_1 = new ol.format.GeoJSON();
var features_District_join_1 = format_District_join_1.readFeatures(json_District_join_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_join_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_join_1.addFeatures(features_District_join_1);
var lyr_District_join_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_join_1, 
                style: style_District_join_1,
                popuplayertitle: "District_join",
                interactive: true,
    title: 'District_join<br />\
    <img src="styles/legend/District_join_1_0.png" /> 5658 - 139562<br />\
    <img src="styles/legend/District_join_1_1.png" /> 139562 - 214439<br />\
    <img src="styles/legend/District_join_1_2.png" /> 214439 - 312702<br />\
    <img src="styles/legend/District_join_1_3.png" /> 312702 - 670889<br />\
    <img src="styles/legend/District_join_1_4.png" /> 670889 - 2041587<br />'
        });
var format_Airports_2 = new ol.format.GeoJSON();
var features_Airports_2 = format_Airports_2.readFeatures(json_Airports_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airports_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airports_2.addFeatures(features_Airports_2);
var lyr_Airports_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airports_2, 
                style: style_Airports_2,
                popuplayertitle: "Airports",
                interactive: true,
                title: '<img src="styles/legend/Airports_2.png" /> Airports'
            });

lyr_OSMStandard_0.setVisible(true);lyr_District_join_1.setVisible(true);lyr_Airports_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_District_join_1,lyr_Airports_2];
lyr_District_join_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Total_Case': 'Total_Case', 'no_of_hous': 'no_of_hous', 'Total_popu': 'java जनसंख्या', 'Male': 'Male', 'Female': 'Female', 'Annual_Gro': 'Annual_Gro', 'area_in_km': 'area_in_km', });
lyr_Airports_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'AIRPORT5_D': 'AIRPORT5_D', 'AIRPORT5_1': 'AIRPORT5_1', 'AIRPORT3_A': 'AIRPORT3_A', 'AIRPORT3_P': 'AIRPORT3_P', 'AIRPORT_': 'AIRPORT_', 'AIRPORT_ID': 'AIRPORT_ID', 'NAME': 'NAME', 'CLASS': 'CLASS', 'POLYGONID': 'POLYGONID', 'SCALE': 'SCALE', 'ANGLE': 'ANGLE', 'POLYGONI_1': 'POLYGONI_1', 'SCALE_1': 'SCALE_1', 'ANGLE_1': 'ANGLE_1', 'NEAR_FID': 'NEAR_FID', 'NEAR_DIST': 'NEAR_DIST', 'photo': 'photo', });
lyr_District_join_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Total_Case': 'TextEdit', 'no_of_hous': 'TextEdit', 'Total_popu': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'Annual_Gro': 'TextEdit', 'area_in_km': 'TextEdit', });
lyr_Airports_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'AIRPORT5_D': 'TextEdit', 'AIRPORT5_1': 'TextEdit', 'AIRPORT3_A': 'TextEdit', 'AIRPORT3_P': 'TextEdit', 'AIRPORT_': 'TextEdit', 'AIRPORT_ID': 'TextEdit', 'NAME': 'ExternalResource', 'CLASS': 'TextEdit', 'POLYGONID': 'TextEdit', 'SCALE': 'TextEdit', 'ANGLE': 'TextEdit', 'POLYGONI_1': 'TextEdit', 'SCALE_1': 'TextEdit', 'ANGLE_1': 'TextEdit', 'NEAR_FID': 'TextEdit', 'NEAR_DIST': 'TextEdit', 'photo': 'ExternalResource', });
lyr_District_join_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'DISTRICT': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Total_Case': 'hidden field', 'no_of_hous': 'hidden field', 'Total_popu': 'inline label - always visible', 'Male': 'inline label - always visible', 'Female': 'header label - visible with data', 'Annual_Gro': 'hidden field', 'area_in_km': 'hidden field', });
lyr_Airports_2.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'AREA': 'no label', 'PERIMETER': 'no label', 'AIRPORT5_D': 'no label', 'AIRPORT5_1': 'no label', 'AIRPORT3_A': 'no label', 'AIRPORT3_P': 'no label', 'AIRPORT_': 'no label', 'AIRPORT_ID': 'hidden field', 'NAME': 'no label', 'CLASS': 'no label', 'POLYGONID': 'no label', 'SCALE': 'no label', 'ANGLE': 'no label', 'POLYGONI_1': 'no label', 'SCALE_1': 'no label', 'ANGLE_1': 'no label', 'NEAR_FID': 'no label', 'NEAR_DIST': 'no label', 'photo': 'no label', });
lyr_Airports_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});