package me.alexandruc.summerwell.api.ticket_type;

import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Data;

@Data
@JsonPropertyOrder({ "ticketId", "name", "type", "year", "price", "stock", "color" })
public class TicketTypeData {
    private String ticketId;
    private String name;
    private String type;
    private Integer year;
    private BigDecimal price;
    private Integer stock;
    private String color;
}
