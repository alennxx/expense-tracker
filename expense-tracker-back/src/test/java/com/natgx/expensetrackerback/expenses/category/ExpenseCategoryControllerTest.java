package com.natgx.expensetrackerback.expenses.category;

import com.natgx.expensetrackerback.expenses.ExpenseTest;
import com.natgx.expensetrackerback.expenses.category.dto.ExpenseCategoryDto;
import com.natgx.expensetrackerback.expenses.category.web.ExpenseCategoryController;
import com.natgx.expensetrackerback.testdatafactory.expenses.ExpenseCategoryTestDataFactory;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ExpenseCategoryControllerTest extends ExpenseTest {

    @Mock
    ExpenseCategoryFacade facade;

    @InjectMocks
    ExpenseCategoryController controller;

    @Test
    void shouldFindAllExpenseCategories() {
        List<ExpenseCategoryDto> categories = ExpenseCategoryTestDataFactory.newExpenseCategoriesDto();
        Mockito.when(facade.findExpenseCategories()).thenReturn(categories);

        List<ExpenseCategoryDto> result = controller.findCategories();

        assertEquals(categories, result);
    }

    @Test
    void shouldFindEmptyExpenseCategories() {
        Mockito.when(facade.findExpenseCategories()).thenReturn(Collections.emptyList());

        List<ExpenseCategoryDto> result = controller.findCategories();

        assertNotNull(result);
        assertTrue(result.isEmpty());
    }

}
