package com.relato.msbookspayments.dto;

import lombok.Getter;
import lombok.Setter;

public class BookResponseDTO {

    private Long id;
    private Boolean visible;

    public Long getId() {
        return id;
    }

    public Boolean getVisible() {
        return visible;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setVisible(Boolean visible) {
        this.visible = visible;
    }
}
