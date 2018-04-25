(ns lakepend.handler
  (:require [compojure.api.sweet :refer :all]
            [ring.util.http-response :refer :all]
            [schema.core :as s]
            [lakepend.backend :as be]))

;{:med_baro 30.2,
; :avg_air_temp 34.62471872376145,
; :med_air_temp 34.5,
; :avg_wind_speed 10.632308984047016,
; :med_wind_speed 9.2,
; :avg_baro 30.17741393786739)

(s/defschema Weather-Avg-Med
  {:med_baro Number,
   :avg_air_temp Number,
   :med_air_temp Number,
   :avg_wind_speed Number,
   :med_wind_speed Number,
   :avg_baro Number})

(def app
  (api
    {:swagger
     {:ui "/"
      :spec "/swagger.json"
      :data {:info {:title "Lake Pend Oreille"
                    :description "API to retrieve some weather info for Lake Pend Oreille"}
             :tags [{:name "api", :description "some apis"}]}}}

    (context "/api" []
      :tags ["api"]

      (GET "/avg-median" []
        :return {:result Weather-Avg-Med}
        :query-params [start-date :- String, end-date :- String]
        :summary "Shows average and median weather data for date range"
        (ok {:result (be/submit-query! start-date end-date)})))))
