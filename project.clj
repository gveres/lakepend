(defproject lakepend "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/java.jdbc "0.5.8"]
                 [org.xerial/sqlite-jdbc "3.8.11.2"]
                 [clj-http "2.1.0"]
                 [clj-time "0.11.0"]
                 [proto-repl "0.3.1"]
                 [metosin/compojure-api "1.1.11"]
                 [org.clojure/clojurescript "1.7.170"]
                 [devcards "0.2.1"]]
  :main lakepend.core
  :ring {:handler lakepend.handler/app}
  :uberjar-name "lakepend.jar"
  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[lein-ring "0.12.4"]
                             [lein-figwheel "0.5.15"]]}}
  :cljsbuild {
              :builds [
                       {:id "devcards"
                        :source-paths ["src"]
                        :figwheel { :devcards true
                                    :open-urls ["http://localhost:3449/cards.html"]} ;; <- note this
                        :compiler { :main    "lakepend.example"
                                    :asset-path "js/devcards_out"
                                    :output-to  "resources/public/js/lakepend_devcards.js"
                                    :output-dir "resources/public/js/devcards_out"
                                    :source-map-timestamp true}}]})
