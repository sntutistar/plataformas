package com.relato.gateway_service.filter;

import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

@Component
public class RewriteMethodFilter
        extends AbstractGatewayFilterFactory<RewriteMethodFilter.Config> {

    public RewriteMethodFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {

            var newRequest = exchange.getRequest()
                    .mutate()
                    .method(HttpMethod.valueOf(config.method))
                    .build();

            var newExchange = exchange.mutate()
                    .request(newRequest)
                    .build();

            return chain.filter(newExchange);
        };
    }

    public static class Config {
        public String method;
    }
}
