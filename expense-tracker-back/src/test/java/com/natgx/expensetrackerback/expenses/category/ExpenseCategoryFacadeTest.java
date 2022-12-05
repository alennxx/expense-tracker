package com.natgx.expensetrackerback.expenses.category;

import com.natgx.expensetrackerback.expenses.ExpenseTest;
import com.natgx.expensetrackerback.expenses.category.dto.ExpenseCategoryDto;
import com.natgx.expensetrackerback.testdatafactory.expenses.ExpenseCategoryTestDataFactory;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ExpenseCategoryFacadeTest extends ExpenseTest {
    @Mock
    ExpenseCategoryRepository repository;

    @InjectMocks
    ExpenseCategoryFacade facade;

    @Test
    void shouldFindAllExpenseCategories() {
        List<ExpenseCategory> categories = ExpenseCategoryTestDataFactory.newExpenseCategories();
        Mockito.when(repository.findAll()).thenReturn(categories);

        List<ExpenseCategoryDto> result = facade.findExpenseCategories();

        assertNotNull(result);
        assertEquals(categories.size(), result.size());
        for (ExpenseCategory expectedCategory : categories) {
            Optional<ExpenseCategoryDto> resultCategory = findById(expectedCategory.getId(), result, ExpenseCategoryDto::id);
            assertTrue(resultCategory.isPresent());
            assertEquals(expectedCategory.getName(), resultCategory.get().name());
        }
    }

    @Test
    void shouldGetEmptyExpenseCategories() {
        Mockito.when(repository.findAll()).thenReturn(Collections.emptyList());

        List<ExpenseCategoryDto> result = facade.findExpenseCategories();

        assertNotNull(result);
        assertTrue(result.isEmpty());
    }



}
