package com.github.skjolber.csv;

import org.openjdk.jmh.annotations.Setup;

import com.github.skjolber.csv.scan.CsvClassMapping;

public abstract class AbstractCityCsvParserBenchmark extends AbstractCsvParserBenchmark<City> {
	
	@Setup
	public void setCsvDatabind() throws Exception {
		plain = CsvClassMapping.builder(City.class)
				.stringField("Country")
					.required()
				.stringField("City")
					.required()
				.stringField("AccentCity")
					.required()
				.stringField("Region")
					.quoted()
					.optional()
				.longField("Population")
					.optional()
				.doubleField("Latitude")
					.optional()
				.doubleField("Longitude")
					.optional()
				.build();
		
		quotes = CsvClassMapping.builder(City.class)
				.stringField("Country")
					.quoted()
					.required()
				.stringField("City")
					.quoted()
					.required()
				.stringField("AccentCity")
					.quoted()
					.required()
				.stringField("Region")
					.quoted()
					.optional()
				.longField("Population")
					.quoted()
					.optional()
				.doubleField("Latitude")
					.quoted()
					.optional()
				.doubleField("Longitude")
					.quoted()
					.optional()
				.build();
	}
}
