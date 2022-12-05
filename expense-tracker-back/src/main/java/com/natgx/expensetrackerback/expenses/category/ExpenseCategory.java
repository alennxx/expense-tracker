package com.natgx.expensetrackerback.expenses.category;

import com.natgx.expensetrackerback.expenses.category.dto.ExpenseCategoryDto;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ExpenseCategory {

    @Id
    @Getter
    @GeneratedValue
    Long id;

    @Column(unique = true)
    @Getter
    String name;

    public ExpenseCategoryDto dto() {
        return new ExpenseCategoryDto(id, name);
    }

}
