// provided.js - generated by gradle-jmh-report, 2018-09-04 22:41:47.564

var providedBenchmarks = ['results'];

var providedBenchmarkStore = {
'results': 
[
    {
        "jmhVersion" : "1.21",
        "benchmark" : "com.github.skjolber.csv.singleshot.SingleShotGtfsTrips.csvDatabind",
        "mode" : "ss",
        "threads" : 1,
        "forks" : 1,
        "jvm" : "/usr/java/jdk1.8.0_172/jre/bin/java",
        "jvmArgs" : [
            "-XX:+UseG1GC",
            "-Xverify:none"
        ],
        "jdkVersion" : "1.8.0_172",
        "vmName" : "Java HotSpot(TM) 64-Bit Server VM",
        "vmVersion" : "25.172-b11",
        "warmupIterations" : 0,
        "warmupTime" : "single-shot",
        "warmupBatchSize" : 1,
        "measurementIterations" : 1,
        "measurementTime" : "single-shot",
        "measurementBatchSize" : 1,
        "params" : {
            "nbRows" : "100"
        },
        "primaryMetric" : {
            "score" : 16.893525,
            "scoreError" : "NaN",
            "scoreConfidence" : [
                "NaN",
                "NaN"
            ],
            "scorePercentiles" : {
                "0.0" : 16.893525,
                "50.0" : 16.893525,
                "90.0" : 16.893525,
                "95.0" : 16.893525,
                "99.0" : 16.893525,
                "99.9" : 16.893525,
                "99.99" : 16.893525,
                "99.999" : 16.893525,
                "99.9999" : 16.893525,
                "100.0" : 16.893525
            },
            "scoreUnit" : "ms/op",
            "rawData" : [
                [
                    16.893525
                ]
            ]
        },
        "secondaryMetrics" : {
        }
    },
    {
        "jmhVersion" : "1.21",
        "benchmark" : "com.github.skjolber.csv.singleshot.SingleShotGtfsTrips.simpleFlatMapper",
        "mode" : "ss",
        "threads" : 1,
        "forks" : 1,
        "jvm" : "/usr/java/jdk1.8.0_172/jre/bin/java",
        "jvmArgs" : [
            "-XX:+UseG1GC",
            "-Xverify:none"
        ],
        "jdkVersion" : "1.8.0_172",
        "vmName" : "Java HotSpot(TM) 64-Bit Server VM",
        "vmVersion" : "25.172-b11",
        "warmupIterations" : 0,
        "warmupTime" : "single-shot",
        "warmupBatchSize" : 1,
        "measurementIterations" : 1,
        "measurementTime" : "single-shot",
        "measurementBatchSize" : 1,
        "params" : {
            "nbRows" : "100"
        },
        "primaryMetric" : {
            "score" : 36.833948,
            "scoreError" : "NaN",
            "scoreConfidence" : [
                "NaN",
                "NaN"
            ],
            "scorePercentiles" : {
                "0.0" : 36.833948,
                "50.0" : 36.833948,
                "90.0" : 36.833948,
                "95.0" : 36.833948,
                "99.0" : 36.833948,
                "99.9" : 36.833948,
                "99.99" : 36.833948,
                "99.999" : 36.833948,
                "99.9999" : 36.833948,
                "100.0" : 36.833948
            },
            "scoreUnit" : "ms/op",
            "rawData" : [
                [
                    36.833948
                ]
            ]
        },
        "secondaryMetrics" : {
        }
    },
    {
        "jmhVersion" : "1.21",
        "benchmark" : "com.github.skjolber.csv.singleshot.SingleShotGtfsTrips.univocity",
        "mode" : "ss",
        "threads" : 1,
        "forks" : 1,
        "jvm" : "/usr/java/jdk1.8.0_172/jre/bin/java",
        "jvmArgs" : [
            "-XX:+UseG1GC",
            "-Xverify:none"
        ],
        "jdkVersion" : "1.8.0_172",
        "vmName" : "Java HotSpot(TM) 64-Bit Server VM",
        "vmVersion" : "25.172-b11",
        "warmupIterations" : 0,
        "warmupTime" : "single-shot",
        "warmupBatchSize" : 1,
        "measurementIterations" : 1,
        "measurementTime" : "single-shot",
        "measurementBatchSize" : 1,
        "params" : {
            "nbRows" : "100"
        },
        "primaryMetric" : {
            "score" : 30.378572,
            "scoreError" : "NaN",
            "scoreConfidence" : [
                "NaN",
                "NaN"
            ],
            "scorePercentiles" : {
                "0.0" : 30.378572,
                "50.0" : 30.378572,
                "90.0" : 30.378572,
                "95.0" : 30.378572,
                "99.0" : 30.378572,
                "99.9" : 30.378572,
                "99.99" : 30.378572,
                "99.999" : 30.378572,
                "99.9999" : 30.378572,
                "100.0" : 30.378572
            },
            "scoreUnit" : "ms/op",
            "rawData" : [
                [
                    30.378572
                ]
            ]
        },
        "secondaryMetrics" : {
        }
    },
    {
        "jmhVersion" : "1.21",
        "benchmark" : "com.github.skjolber.csv.singleshot.SingleShotQuotedGtfsTrips.csvDatabind",
        "mode" : "ss",
        "threads" : 1,
        "forks" : 1,
        "jvm" : "/usr/java/jdk1.8.0_172/jre/bin/java",
        "jvmArgs" : [
            "-XX:+UseG1GC",
            "-Xverify:none"
        ],
        "jdkVersion" : "1.8.0_172",
        "vmName" : "Java HotSpot(TM) 64-Bit Server VM",
        "vmVersion" : "25.172-b11",
        "warmupIterations" : 0,
        "warmupTime" : "single-shot",
        "warmupBatchSize" : 1,
        "measurementIterations" : 1,
        "measurementTime" : "single-shot",
        "measurementBatchSize" : 1,
        "params" : {
            "nbRows" : "100"
        },
        "primaryMetric" : {
            "score" : 18.098182,
            "scoreError" : "NaN",
            "scoreConfidence" : [
                "NaN",
                "NaN"
            ],
            "scorePercentiles" : {
                "0.0" : 18.098182,
                "50.0" : 18.098182,
                "90.0" : 18.098182,
                "95.0" : 18.098182,
                "99.0" : 18.098182,
                "99.9" : 18.098182,
                "99.99" : 18.098182,
                "99.999" : 18.098182,
                "99.9999" : 18.098182,
                "100.0" : 18.098182
            },
            "scoreUnit" : "ms/op",
            "rawData" : [
                [
                    18.098182
                ]
            ]
        },
        "secondaryMetrics" : {
        }
    },
    {
        "jmhVersion" : "1.21",
        "benchmark" : "com.github.skjolber.csv.singleshot.SingleShotQuotedGtfsTrips.simpleFlatMapper",
        "mode" : "ss",
        "threads" : 1,
        "forks" : 1,
        "jvm" : "/usr/java/jdk1.8.0_172/jre/bin/java",
        "jvmArgs" : [
            "-XX:+UseG1GC",
            "-Xverify:none"
        ],
        "jdkVersion" : "1.8.0_172",
        "vmName" : "Java HotSpot(TM) 64-Bit Server VM",
        "vmVersion" : "25.172-b11",
        "warmupIterations" : 0,
        "warmupTime" : "single-shot",
        "warmupBatchSize" : 1,
        "measurementIterations" : 1,
        "measurementTime" : "single-shot",
        "measurementBatchSize" : 1,
        "params" : {
            "nbRows" : "100"
        },
        "primaryMetric" : {
            "score" : 36.27768,
            "scoreError" : "NaN",
            "scoreConfidence" : [
                "NaN",
                "NaN"
            ],
            "scorePercentiles" : {
                "0.0" : 36.27768,
                "50.0" : 36.27768,
                "90.0" : 36.27768,
                "95.0" : 36.27768,
                "99.0" : 36.27768,
                "99.9" : 36.27768,
                "99.99" : 36.27768,
                "99.999" : 36.27768,
                "99.9999" : 36.27768,
                "100.0" : 36.27768
            },
            "scoreUnit" : "ms/op",
            "rawData" : [
                [
                    36.27768
                ]
            ]
        },
        "secondaryMetrics" : {
        }
    },
    {
        "jmhVersion" : "1.21",
        "benchmark" : "com.github.skjolber.csv.singleshot.SingleShotQuotedGtfsTrips.univocity",
        "mode" : "ss",
        "threads" : 1,
        "forks" : 1,
        "jvm" : "/usr/java/jdk1.8.0_172/jre/bin/java",
        "jvmArgs" : [
            "-XX:+UseG1GC",
            "-Xverify:none"
        ],
        "jdkVersion" : "1.8.0_172",
        "vmName" : "Java HotSpot(TM) 64-Bit Server VM",
        "vmVersion" : "25.172-b11",
        "warmupIterations" : 0,
        "warmupTime" : "single-shot",
        "warmupBatchSize" : 1,
        "measurementIterations" : 1,
        "measurementTime" : "single-shot",
        "measurementBatchSize" : 1,
        "params" : {
            "nbRows" : "100"
        },
        "primaryMetric" : {
            "score" : 29.037532,
            "scoreError" : "NaN",
            "scoreConfidence" : [
                "NaN",
                "NaN"
            ],
            "scorePercentiles" : {
                "0.0" : 29.037532,
                "50.0" : 29.037532,
                "90.0" : 29.037532,
                "95.0" : 29.037532,
                "99.0" : 29.037532,
                "99.9" : 29.037532,
                "99.99" : 29.037532,
                "99.999" : 29.037532,
                "99.9999" : 29.037532,
                "100.0" : 29.037532
            },
            "scoreUnit" : "ms/op",
            "rawData" : [
                [
                    29.037532
                ]
            ]
        },
        "secondaryMetrics" : {
        }
    },
    {
        "jmhVersion" : "1.21",
        "benchmark" : "com.github.skjolber.csv.singleshot.SingleShotWorldCities.csvDatabind",
        "mode" : "ss",
        "threads" : 1,
        "forks" : 1,
        "jvm" : "/usr/java/jdk1.8.0_172/jre/bin/java",
        "jvmArgs" : [
            "-XX:+UseG1GC",
            "-Xverify:none"
        ],
        "jdkVersion" : "1.8.0_172",
        "vmName" : "Java HotSpot(TM) 64-Bit Server VM",
        "vmVersion" : "25.172-b11",
        "warmupIterations" : 0,
        "warmupTime" : "single-shot",
        "warmupBatchSize" : 1,
        "measurementIterations" : 1,
        "measurementTime" : "single-shot",
        "measurementBatchSize" : 1,
        "params" : {
            "nbRows" : "100"
        },
        "primaryMetric" : {
            "score" : 13.053722,
            "scoreError" : "NaN",
            "scoreConfidence" : [
                "NaN",
                "NaN"
            ],
            "scorePercentiles" : {
                "0.0" : 13.053722,
                "50.0" : 13.053722,
                "90.0" : 13.053722,
                "95.0" : 13.053722,
                "99.0" : 13.053722,
                "99.9" : 13.053722,
                "99.99" : 13.053722,
                "99.999" : 13.053722,
                "99.9999" : 13.053722,
                "100.0" : 13.053722
            },
            "scoreUnit" : "ms/op",
            "rawData" : [
                [
                    13.053722
                ]
            ]
        },
        "secondaryMetrics" : {
        }
    },
    {
        "jmhVersion" : "1.21",
        "benchmark" : "com.github.skjolber.csv.singleshot.SingleShotWorldCities.simpleFlatMapper",
        "mode" : "ss",
        "threads" : 1,
        "forks" : 1,
        "jvm" : "/usr/java/jdk1.8.0_172/jre/bin/java",
        "jvmArgs" : [
            "-XX:+UseG1GC",
            "-Xverify:none"
        ],
        "jdkVersion" : "1.8.0_172",
        "vmName" : "Java HotSpot(TM) 64-Bit Server VM",
        "vmVersion" : "25.172-b11",
        "warmupIterations" : 0,
        "warmupTime" : "single-shot",
        "warmupBatchSize" : 1,
        "measurementIterations" : 1,
        "measurementTime" : "single-shot",
        "measurementBatchSize" : 1,
        "params" : {
            "nbRows" : "100"
        },
        "primaryMetric" : {
            "score" : 30.286146,
            "scoreError" : "NaN",
            "scoreConfidence" : [
                "NaN",
                "NaN"
            ],
            "scorePercentiles" : {
                "0.0" : 30.286146,
                "50.0" : 30.286146,
                "90.0" : 30.286146,
                "95.0" : 30.286146,
                "99.0" : 30.286146,
                "99.9" : 30.286146,
                "99.99" : 30.286146,
                "99.999" : 30.286146,
                "99.9999" : 30.286146,
                "100.0" : 30.286146
            },
            "scoreUnit" : "ms/op",
            "rawData" : [
                [
                    30.286146
                ]
            ]
        },
        "secondaryMetrics" : {
        }
    },
    {
        "jmhVersion" : "1.21",
        "benchmark" : "com.github.skjolber.csv.singleshot.SingleShotWorldCities.univocity",
        "mode" : "ss",
        "threads" : 1,
        "forks" : 1,
        "jvm" : "/usr/java/jdk1.8.0_172/jre/bin/java",
        "jvmArgs" : [
            "-XX:+UseG1GC",
            "-Xverify:none"
        ],
        "jdkVersion" : "1.8.0_172",
        "vmName" : "Java HotSpot(TM) 64-Bit Server VM",
        "vmVersion" : "25.172-b11",
        "warmupIterations" : 0,
        "warmupTime" : "single-shot",
        "warmupBatchSize" : 1,
        "measurementIterations" : 1,
        "measurementTime" : "single-shot",
        "measurementBatchSize" : 1,
        "params" : {
            "nbRows" : "100"
        },
        "primaryMetric" : {
            "score" : 36.986175,
            "scoreError" : "NaN",
            "scoreConfidence" : [
                "NaN",
                "NaN"
            ],
            "scorePercentiles" : {
                "0.0" : 36.986175,
                "50.0" : 36.986175,
                "90.0" : 36.986175,
                "95.0" : 36.986175,
                "99.0" : 36.986175,
                "99.9" : 36.986175,
                "99.99" : 36.986175,
                "99.999" : 36.986175,
                "99.9999" : 36.986175,
                "100.0" : 36.986175
            },
            "scoreUnit" : "ms/op",
            "rawData" : [
                [
                    36.986175
                ]
            ]
        },
        "secondaryMetrics" : {
        }
    },
    {
        "jmhVersion" : "1.21",
        "benchmark" : "com.github.skjolber.csv.singleshot.SingleShotWorldCitiesQuotes.csvDatabind",
        "mode" : "ss",
        "threads" : 1,
        "forks" : 1,
        "jvm" : "/usr/java/jdk1.8.0_172/jre/bin/java",
        "jvmArgs" : [
            "-XX:+UseG1GC",
            "-Xverify:none"
        ],
        "jdkVersion" : "1.8.0_172",
        "vmName" : "Java HotSpot(TM) 64-Bit Server VM",
        "vmVersion" : "25.172-b11",
        "warmupIterations" : 0,
        "warmupTime" : "single-shot",
        "warmupBatchSize" : 1,
        "measurementIterations" : 1,
        "measurementTime" : "single-shot",
        "measurementBatchSize" : 1,
        "params" : {
            "nbRows" : "100"
        },
        "primaryMetric" : {
            "score" : 10.808208,
            "scoreError" : "NaN",
            "scoreConfidence" : [
                "NaN",
                "NaN"
            ],
            "scorePercentiles" : {
                "0.0" : 10.808208,
                "50.0" : 10.808208,
                "90.0" : 10.808208,
                "95.0" : 10.808208,
                "99.0" : 10.808208,
                "99.9" : 10.808208,
                "99.99" : 10.808208,
                "99.999" : 10.808208,
                "99.9999" : 10.808208,
                "100.0" : 10.808208
            },
            "scoreUnit" : "ms/op",
            "rawData" : [
                [
                    10.808208
                ]
            ]
        },
        "secondaryMetrics" : {
        }
    },
    {
        "jmhVersion" : "1.21",
        "benchmark" : "com.github.skjolber.csv.singleshot.SingleShotWorldCitiesQuotes.simpleFlatMapper",
        "mode" : "ss",
        "threads" : 1,
        "forks" : 1,
        "jvm" : "/usr/java/jdk1.8.0_172/jre/bin/java",
        "jvmArgs" : [
            "-XX:+UseG1GC",
            "-Xverify:none"
        ],
        "jdkVersion" : "1.8.0_172",
        "vmName" : "Java HotSpot(TM) 64-Bit Server VM",
        "vmVersion" : "25.172-b11",
        "warmupIterations" : 0,
        "warmupTime" : "single-shot",
        "warmupBatchSize" : 1,
        "measurementIterations" : 1,
        "measurementTime" : "single-shot",
        "measurementBatchSize" : 1,
        "params" : {
            "nbRows" : "100"
        },
        "primaryMetric" : {
            "score" : 35.038862,
            "scoreError" : "NaN",
            "scoreConfidence" : [
                "NaN",
                "NaN"
            ],
            "scorePercentiles" : {
                "0.0" : 35.038862,
                "50.0" : 35.038862,
                "90.0" : 35.038862,
                "95.0" : 35.038862,
                "99.0" : 35.038862,
                "99.9" : 35.038862,
                "99.99" : 35.038862,
                "99.999" : 35.038862,
                "99.9999" : 35.038862,
                "100.0" : 35.038862
            },
            "scoreUnit" : "ms/op",
            "rawData" : [
                [
                    35.038862
                ]
            ]
        },
        "secondaryMetrics" : {
        }
    },
    {
        "jmhVersion" : "1.21",
        "benchmark" : "com.github.skjolber.csv.singleshot.SingleShotWorldCitiesQuotes.univocity",
        "mode" : "ss",
        "threads" : 1,
        "forks" : 1,
        "jvm" : "/usr/java/jdk1.8.0_172/jre/bin/java",
        "jvmArgs" : [
            "-XX:+UseG1GC",
            "-Xverify:none"
        ],
        "jdkVersion" : "1.8.0_172",
        "vmName" : "Java HotSpot(TM) 64-Bit Server VM",
        "vmVersion" : "25.172-b11",
        "warmupIterations" : 0,
        "warmupTime" : "single-shot",
        "warmupBatchSize" : 1,
        "measurementIterations" : 1,
        "measurementTime" : "single-shot",
        "measurementBatchSize" : 1,
        "params" : {
            "nbRows" : "100"
        },
        "primaryMetric" : {
            "score" : 31.512475,
            "scoreError" : "NaN",
            "scoreConfidence" : [
                "NaN",
                "NaN"
            ],
            "scorePercentiles" : {
                "0.0" : 31.512475,
                "50.0" : 31.512475,
                "90.0" : 31.512475,
                "95.0" : 31.512475,
                "99.0" : 31.512475,
                "99.9" : 31.512475,
                "99.99" : 31.512475,
                "99.999" : 31.512475,
                "99.9999" : 31.512475,
                "100.0" : 31.512475
            },
            "scoreUnit" : "ms/op",
            "rawData" : [
                [
                    31.512475
                ]
            ]
        },
        "secondaryMetrics" : {
        }
    }
]


};